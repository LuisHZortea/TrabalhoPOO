import { PrismaClient } from "@prisma/client";
import Estande from "../classes/Estande";

const prisma = new PrismaClient();

export async function createEstande(estande: Estande) {
    
    const estandeData = await prisma.estande.create({
        data: {  
            numeroEstande: estande.getNumeroEstande(),
            grupos: estande.getGrupos()
        }
    })

}