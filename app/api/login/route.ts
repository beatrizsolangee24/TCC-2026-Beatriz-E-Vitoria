import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, senha } = body;

    if (!email || !senha) {
      return NextResponse.json({ erro: "E-mail e senha são obrigatórios." }, { status: 400 });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { email: email },
    });

    if (!usuario) {
      return NextResponse.json({ erro: "E-mail ou senha incorretos." }, { status: 401 });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return NextResponse.json({ erro: "E-mail ou senha incorretos." }, { status: 401 });
    }

    const { senha: _, ...usuarioSemSenha } = usuario;

    return NextResponse.json({
      mensagem: "Login realizado com sucesso",
      usuario: usuarioSemSenha,
      tipoReal: usuario.tipo 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ erro: "Erro interno no servidor." }, { status: 500 });
  }
}