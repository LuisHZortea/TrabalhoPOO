import Grupo from "./Grupo";

export default class Estande{
    private numeroEstande:number;
    private grupos:Grupo;

    constructor(numeroEstande:number, grupos: Grupo){
        this.numeroEstande = numeroEstande;
        this.grupos = grupos;
    }

    public getNumeroEstande(){
        return this.numeroEstande;
    }
    
    public setNumeroEstande(grupos:Grupo){
        this.grupos = grupos;
    }
    
    public getGrupos(){
        return this.grupos;
    }
    
    public setGrupos(grupos:Grupo){
        this.grupos = grupos;
    }
    
}