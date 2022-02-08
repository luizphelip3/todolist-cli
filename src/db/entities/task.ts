import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Task {

    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    descricao!: string;

    @Column()
    prioridade!: string;

    @CreateDateColumn()
    criadoEm?: Date;

    @Column({ default: `pendente` })
    status?: string;

    @Column()
    isDeleted?: boolean;

}