import Aluno from './Aluno'
import Professor from './Professor';
import Avaliacao from './Avaliacao'

export default class Avaliador{
    private tipoAvaliador: String;
    private matricula: String;
    private aluno?: Aluno;
    private professor?: Professor;
   

    constructor(tipoAvaliador: String, matricula: String){
        this.tipoAvaliador =tipoAvaliador;
        this.matricula=matricula;


    }

    public getTipoAvaliador(){
        return this.tipoAvaliador
    }
    
    public getMatricula(){
        return this.matricula
    }

    public setTipoAvaliador(tipoAvaliador: String){
        this.tipoAvaliador=tipoAvaliador
    }

    public setMatricula(matricula: String){
        this.matricula=matricula
    }

}