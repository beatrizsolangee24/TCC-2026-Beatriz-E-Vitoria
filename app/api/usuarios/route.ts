import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { z } from 'zod';

const cadastroSchema = z.object({
  nome: z.string().min(3, "Nome muito curto").max(255).trim(),
  email: z.string().email("E-mail inválido").max(255).trim().toLowerCase(),
  telefone: z.string().max(20).optional(),
  matricula: z.string().max(14).optional(),
  cpf: z.string().max(14).optional(),
  tipo: z.enum(['APOIADORA', 'AJUDADA']),
}).refine((dados) => dados.matricula || dados.cpf, {
  message: "É obrigatório informar o CPF ou a Matrícula do IFB.",
  path: ["matricula"] 
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const dadosValidados = cadastroSchema.parse(body);

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email: dadosValidados.email },
      select: { id: true } 
    });

    if (usuarioExistente) {
      return NextResponse.json({ erro: 'Este e-mail já está cadastrado.' }, { status: 409 });
    }

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome: dadosValidados.nome,
        email: dadosValidados.email,
        telefone: dadosValidados.telefone,
        matricula: dadosValidados.matricula,
        cpf: dadosValidados.cpf, 
        tipo: dadosValidados.tipo,
        statusAprovacao: 'PENDENTE',
      },
      select: {
        id: true,
        nome: true,
        tipo: true,
      }
    });

    return NextResponse.json({ sucesso: true, usuario: novoUsuario }, { status: 201 });

  } catch (erro) {
    if (erro instanceof z.ZodError) {
      return NextResponse.json({ erro: 'Dados de cadastro inválidos', detalhes: erro.flatten().fieldErrors }, { status: 400 });
    }
    return NextResponse.json({ erro: 'Erro interno no servidor' }, { status: 500 });
  }
}