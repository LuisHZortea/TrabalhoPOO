-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "lider" BOOLEAN NOT NULL,
    "matricula" TEXT NOT NULL,
    CONSTRAINT "Aluno_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "Grupo" ("lider") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grupo" (
    "nome" TEXT NOT NULL,
    "numeroGrupo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numeroEstande" INTEGER NOT NULL,
    "dataHora" DATETIME NOT NULL,
    "lider" TEXT NOT NULL,
    CONSTRAINT "Grupo_numeroEstande_fkey" FOREIGN KEY ("numeroEstande") REFERENCES "Estande" ("numeroEstande") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matricula" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nota" INTEGER NOT NULL,
    "matriculaAvaliador" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_id_fkey" FOREIGN KEY ("id") REFERENCES "Grupo" ("numeroGrupo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_matriculaAvaliador_fkey" FOREIGN KEY ("matriculaAvaliador") REFERENCES "Avaliador" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliador" (
    "tipoAvaliador" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    CONSTRAINT "Avaliador_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliador_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "Professor" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estande" (
    "numeroEstande" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_lider_key" ON "Grupo"("lider");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_matricula_key" ON "Professor"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliador_matricula_key" ON "Avaliador"("matricula");
