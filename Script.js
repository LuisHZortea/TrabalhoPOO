model Aluno {
  id Int @id @default(autoincrement())
  email String
  //senha String
  curso String
  matriculaLider Grupo? @relation(fields: [matricula], references: [lider])
  matricula String @unique
}


model Grupo {
  nome String
  numeroGrupo Int @id
  numeroEstande Int
  dataHora DateTime
  alunos Aluno[]
  lider String @unique

  //ISSO TA DANDO PROBLEMA EU N SEI O PQ
  estande Estande @relation(fields: [numeroEstande], references: [numeroEstande])
}

model Professor {
  id Int @id @default(autoincrement())
  matricula String @unique
  nome String
  // matriculaAvaliacao Avaliacao? @relation(fields: [matricula], references: [matriculaAvaliador])
}

model Avaliacao {
  id Int @id 
  numeroGrupo Int
  nota Int
  matriculaAvaliador String @unique

  //AQUI TAMO TENTANDO UNIR O TANTO OS PROFESSORES QUANTO OS ALUNOS COMO AVALIADORES

  // professor Professor? @relation(fields: [matriculaAvaliador], references: [matricula])
  // aluno Aluno? @relation(fields: [matriculaAvaliador], references: [matricula])
  }

model Estande {
  numeroEstande Int @id
}
