import { PrismaClient } from "@prisma/client";
import Avaliacao from "../classes/Avaliacao";
import Grupo from "../classes/Grupo";

const prisma = new PrismaClient();

export async function createAvalicao(avaliacao: Avaliacao, grupo: Grupo) {
    const avaliacaoData = await prisma.avaliacao.create({
        data: {
            nome: grupo.getNome(),
            nota: avaliacao.getNota(),
            avaliador: avaliacao.getAvaliador()
        }
    })
}
