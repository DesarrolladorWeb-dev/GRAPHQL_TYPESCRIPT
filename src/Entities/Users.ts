import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Con BaseEntity le decimos que es una tabla
@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn() //generara el id por mi (auto_increment)
    id :number; 

    @Column()
    name: string

    @Column()
    username : string

    @Column()
    password : string
}