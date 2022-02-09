import { ObjectID } from "typeorm";

// Estrutura de interface criada para especificar as propriedades que a classe Task ira implementar
export interface ITask {

    id?: ObjectID | string;
    descricao: string;
    prioridade: string;
    status?: string;
    criadoEm?: Date | string;
    isDeleted?: boolean;

}