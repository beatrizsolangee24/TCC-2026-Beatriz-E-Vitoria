import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// 1. Zod atualizado com Política de Senha Forte
const usuarioSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  tipo: z.enum(["APOIADORA", "AJUDADA", "ADMIN"]),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(8, "Telefone inválido"),
  matricula: z.string().optional(),
  cpf: z.string().optional(),
  senha: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(/[\W_]/, "A senha deve conter pelo menos um caractere especial (!, @, #, etc)"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const dadosValidados = usuarioSchema.parse(body);

    if (dadosValidados.tipo === "AJUDADA" && !dadosValidados.matricula) {
      return NextResponse.json({ erro: "Alunas precisam informar a matrícula do IFB." }, { status: 400 });
    }
    if (dadosValidados.tipo === "APOIADORA" && !dadosValidados.matricula && !dadosValidados.cpf) {
      return NextResponse.json({ erro: "Informe a Matrícula ou o CPF." }, { status: 400 });
    }

    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [
          { email: dadosValidados.email },
          ...(dadosValidados.matricula ? [{ matricula: dadosValidados.matricula }] : []),
          ...(dadosValidados.cpf ? [{ cpf: dadosValidados.cpf }] : []),
        ],
      },
    });

    if (usuarioExistente) {
      return NextResponse.json({ erro: "Já existe um cadastro com este E-mail, Matrícula ou CPF." }, { status: 409 });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(dadosValidados.senha, salt);

    const novaUsuaria = await prisma.usuario.create({
      data: {
        nome: dadosValidados.nome,
        tipo: dadosValidados.tipo,
        email: dadosValidados.email,
        telefone: dadosValidados.telefone,
        matricula: dadosValidados.matricula || null,
        cpf: dadosValidados.cpf || null,
        senha: senhaCriptografada,
      },
    });

    const { senha: _, ...usuariaSemSenha } = novaUsuaria;
    return NextResponse.json(usuariaSemSenha, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ erro: error.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ erro: "Erro interno no servidor." }, { status: 500 });
  }
}