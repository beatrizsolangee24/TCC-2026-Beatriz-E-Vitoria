import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando a criação do Admin principal...')

  const senhaCriptografada = await bcrypt.hash('#Vitoria234', 10)

  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@ifb.edu.br' },
    update: {},
    create: {
      nome: 'Administração Apoia Mulher',
      email: 'admin@ifb.edu.br',
      senha: senhaCriptografada,
      telefone: '61900000000',
      tipo: 'ADMIN',
    },
  })

  console.log('✅ Administradora criada com sucesso!')
  console.log(`Email: ${admin.email}`)
  console.log(`Senha definida no script`)
}

main()
  .catch((e) => {
    console.error('Erro ao criar admin:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })