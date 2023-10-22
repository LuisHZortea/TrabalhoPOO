import { PrismaClient } from "@prisma/client";
import Grupo from "../classes/Grupo";

const prisma = new PrismaClient();

export async function createGrupo(grupo:Grupo){
    const grupoData = await prisma.grupo.create({
        data: {
            nome: grupo.getNome(),
            numeroGrupo: grupo.getNumeroGrupo(),
            numeroEstande: grupo.getNumeroEstande(),
            dataHora: grupo.getDataHora(),
            lider: grupo.getLider(),

        }
    })}

    export async function readGrupo(grupo:Grupo){
        const grupoData = await prisma.grupo.findUnique({
            where:{
                numeroGrupo: grupo.getNumeroGrupo()
            }
        })
    }

    export async function deletGrupo(grupo:Grupo) {
        const grupoData = await prisma.grupo.delete({
            where:{
                numeroGrupo: grupo.getNumeroGrupo()
            }
        })
        
    }
