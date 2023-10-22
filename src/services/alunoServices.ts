import { PrismaClient } from "@prisma/client";
import Aluno from "../classes/Aluno";

const prisma = new PrismaClient();

export async function createAluno(aluno: Aluno){
    
    const alunoData = await prisma.aluno.create({
        data : {
            nome: aluno.getNome(),
            email: aluno.getEmail(),
            curso: aluno.getCurso(),
            matricula: aluno.getMatricula(),
            lider: aluno.getLider(),
        }
    })
}
export async function readAluno(aluno: Aluno) {
    const alunoData = await prisma.aluno.findUnique({
        where: {
            matricula: aluno.getMatricula()
        }
    })
}

export async function deleteAluno(aluno: Aluno) {
    const alunoData = await prisma.aluno.delete({
        where: {
            matricula: aluno.getMatricula(),
        }
    })
}
