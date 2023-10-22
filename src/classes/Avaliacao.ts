import Professor from "./Professor";
import Avaliador from "./Avaliador";
import Grupo from "./Grupo";

export default class Avaliacao{
    private grupo: Grupo;
    private nota: number;
    private avaliador: Avaliador

    constructor(grupo: Grupo, nota: number, avaliador: Avaliador){
        this.grupo = grupo;
        this.nota = nota;
        this.avaliador = avaliador;
    }

    public getGrupo(){
        return this.grupo
    }

    public getNota(){
        return this.nota
    }

    public setGrupo(grupo:Grupo){
        this.grupo=grupo;
    }

    public setNota(nota:number){
        this.nota=nota;
    }

    public getAvaliador(){
        return this.avaliador
    }

    public setAvaliador(avaliador: Avaliador){
        this.avaliador=avaliador;
    }


}