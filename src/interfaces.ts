import { ObjectID } from "typeorm";

export interface ITask {

    id?: ObjectID | string;
    descricao: string;
    prioridade: string;
    status?: string;
    criadoEm?: Date | string;
    isDeleted?: boolean;

}