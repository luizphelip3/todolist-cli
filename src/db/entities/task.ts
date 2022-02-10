import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Task {

    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    description!: string;

    @Column()
    priority!: string;

    @CreateDateColumn()
    createdAt?: Date;

    @Column({ default: `pendente` })
    status?: string;

    @Column()
    isDeleted?: boolean;

}