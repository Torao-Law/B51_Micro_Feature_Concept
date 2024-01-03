import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity({ name: "todos" })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({ nullable: true })
  image: string

  @ManyToOne(() => User, (user) => user.todos, {
    onDelete: "CASCADE"
  })
  user: User
}
