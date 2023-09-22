model Aluno {
  email String
  photoUrl String
  senha String
  matriculaLider Grupo? @relation(fields: [matricula], references: [lider])
  matricula String @unique
}


model Grupo {
  nome String @id
  alunos Aluno[]
  lider String @unique
}
