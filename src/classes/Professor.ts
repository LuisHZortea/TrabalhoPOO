import Avaliador from "./Avaliador";
import Avaliacao from "./Avaliacao"


export default class Professor{
    private matricula: string;
    private nome: string;
    private email: string;
    private matriculaAvaliador?: Avaliador;

    constructor(matricula: string, nome: string, email: string){
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
    }

    public getMatricula(){
        return this.matricula
    }

    public getNome(){
        return this.nome
    }

    public getEmail(){
        return this.email
    }

    public setMatricula(matricula:string){
        this.matricula= matricula
    }

    public setNome(nome:string){
        this.nome= nome
    }

    public setEmail(email:string){
        this.email= email
    }

    //AQUI TEM A FUNÇÂO
}