import { Raca } from "./raca";
import { Classe } from "./classe";

export class Personagem {
    idPersonagem: number;
    nome: string;
    descricao: string;
    nivel: number;
    ativo: boolean;

    idRaca: number;
    idClasse: number

    raca: Raca;
    classe: Classe;
}