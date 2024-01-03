import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Todo } from "./Todo"

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Todo, (todo) => todo.user, {
        onDelete: "CASCADE"
    })
    todos: Todo[]
}
