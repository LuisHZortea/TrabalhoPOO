// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Aluno {
  id Int @id @default(autoincrement())
  email String
  curso String
  matriculaLider Grupo? @relation(fields: [matricula], references: [lider])
  matricula String @unique
  matriculaAvaliador Avaliador?
}

model Grupo {
  nome String
  numeroGrupo Int @id
  numeroEstande Int
  dataHora DateTime
  alunos Aluno[]
  lider String @unique
  estande Estande @relation(fields: [numeroEstande], references: [numeroEstande])
  //ISSO AQUI EMBAIXO ESTA COM ERRO
  avaliacao Avaliacao @relation(fields: [numeroGrupo], references: [nota])

}

model Professor {
  id Int @id @default(autoincrement())
  matricula String @unique
  nome String
  matriculaAvaliador Avaliador?
  // matriculaAvaliacao Avaliacao? @relation(fields: [matricula], references: [matriculaAvaliador])
}

model Avaliacao {
  id Int @id @default(autoincrement())
  nota Int
  grupo Grupo
}

model Avaliador {
  tipoAvaliador String
  matricula String @unique
  aluno Aluno? @relation(fields: [matricula], references: [matricula])
  professor Professor? @relation(fields: [matricula], references: [matricula])
}

model Estande {
  numeroEstande Int @id
  grupos Grupo[] 
}
