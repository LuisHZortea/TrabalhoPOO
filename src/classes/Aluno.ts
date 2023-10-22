import Avaliador from "./Avaliador";
import Grupo from "./Grupo";

export default class Aluno{
    private nome: string;
    private email: string;
    private curso: string;
    private matricula: string;
    private lider: boolean;
    private grupo?: Grupo;
    private matriculaAvaliador?: Avaliador;

    constructor(nome: string, email: string, curso: string, matricula: string, lider: boolean ){
        this.nome = nome;
        this.email = email;
        this.curso = curso;
        this.matricula = matricula;
        this.lider = lider;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getEmail(){
        return this.email;
    }

    public setEmail(email: string){
        this.email = email;
    }

    public getCurso(){
        return this.curso;
    }

    public setCurso(curso: string){
        this.curso = curso;
    }

    public getMatricula(){
        return this.matricula;
    }

    public setMatricula(matricula: string){
        this.matricula = matricula;
    }

    public getLider(){
        return this.lider;
    }

    public setLider(lider: boolean){
        this.lider = lider;
    }

    public getGrupo(){
        return this.grupo;
    }

    public setGrupo(grupo: Grupo){
        this.grupo = grupo;
    }


}