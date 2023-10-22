export default class Grupo{
    private nome: string;
    private numeroGrupo: number;
    private numeroEstande: number;
    private dataHora: Date;
    private lider: string;


    constructor (nome: string, numeroGrupo: number, numeroEstande: number, dataHora: Date, lider: string){
        this.nome= nome;
        this.numeroGrupo = numeroGrupo;
        this.numeroEstande = numeroEstande;
        this.dataHora = dataHora;
        this.lider = lider;
    }

    public getNome(){
        return this.nome;
    }
    
    public getNumeroGrupo(){
        return this.numeroGrupo;
    }
    
    public getNumeroEstande(){
        return this.numeroEstande;
    }
    
    public getDataHora(){
        return this.dataHora;
    }
    
    public getLider(){
        return this.lider;
    }

    public setNome(nome:string){
        this.nome = nome;
    }
    
    public setNumeroGrupo(numeroGrupo:number){
        this.numeroGrupo = numeroGrupo;
    }
    
    public setNumeroEstande(numeroEstande:number){
        this.numeroEstande = numeroEstande;
    }
    
    public setDataHora(dataHora:Date){
        this.dataHora = dataHora;
    }
    
    public setLider(lider:string){
        this.lider = lider;
    }
}