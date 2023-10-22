import Aluno from "./Aluno";
import Avaliacao from "./Avaliacao";
import Avaliador from "./Avaliador";
import Estande  from "./Estande";
import Grupo from "./Grupo";
import Professor from "./Professor";

const data = new Date ('Novembro 10, 1989 00:00:00')

//ALUNOS

const aluno0 = new Aluno("Vitòria Imunda", "casacomigopinkpie@gmail.com", "Dormir", "EOQ2003", false);
const aluno1 = new Aluno("Luis Funfact", "ilovegeorgeharrison@gmail.com", "Beatles", "BEATLES", false);
const aluno2 = new Aluno("Jubis Creudo", "issoehumAbsurdo$gmail.com", "Polemica", "UE2000", true);
const aluno3 = new Aluno("E-Lipe", "eusouumdobradordoarsim@gmail.com", "Emo", "EMO2694", true);


//PROFESSORES

const professor0 = new Professor("SOC1991", "Dr. Eggman", "ouricomautido@gmail.com");
const professor1 = new Professor("POK1995", "Professor Carvalho", "rinhadeanimaissilvestres@gmail.com");
const professor2 = new Professor("AVA2006", "Iroh Hotman", "dragonofthewest@gmail.com");

//GRUPO
const grupo0 = new Grupo("ArLindos", 1, 3, data, "E-Lipe");
const grupo1 = new Grupo("Osvaldos", 2, 2, data, "Jubis Creudo");

//ESTANDE

const estande0 = new Estande(2, grupo1);
const estande1 = new Estande(3, grupo0);

//AVALIADORES

const avaliador0 = new Avaliador("Aluno", "EMO2694");
const avaliador1 = new Avaliador("Professor", "SOC1991")


//AVALIACAO

const avaliacao0 = new Avaliacao(grupo0, 3, avaliador0)
const avaliacao1 = new Avaliacao(grupo1, 7, avaliador1)
