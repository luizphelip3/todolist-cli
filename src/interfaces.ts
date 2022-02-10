import { ObjectID } from "typeorm";

// Estrutura de interface criada para especificar as propriedades que a classe Task ira implementar
export interface ITask {

    id?: ObjectID | string;
    description: string;
    priority: string;
    status?: string;
    createdAt?: Date | string;
    isDeleted?: boolean;

}