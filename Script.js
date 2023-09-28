model Aluno {
  id Int @id @default(autoincrement())
  email String
  senha String
  curso String
  matriculaLider Grupo? @relation(fields: [matricula], references: [lider])
  matricula String @unique
}


model Grupo {
  nome String
  numeroGrupo Int @id
  numeroEstande Int
  alunos Aluno[]
  lider String @unique
}

model Professor {
  id Int @id @default(autoincrement())
  matricula String
  nome String
}

model Avaliacao {
  id Int @id 
  numeroGrupo Int
  nota Int
}

model Estande {
  numeroEstande Int @id
}
