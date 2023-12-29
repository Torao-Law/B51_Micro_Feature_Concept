import { Repository } from "typeorm";
import { Todo } from "../entities/Todo";
import { AppDataSource } from "../data-source";

export default new  class TodoService {
  private readonly TodoRepository: Repository<Todo> = AppDataSource.getRepository(Todo)

  async find() : Promise<object> {
    try {
      const todos = await this.TodoRepository
        .createQueryBuilder("todos")
        .getMany()

      return todos
    } catch (error) {
      throw error
    }
  }

  async create(reqBody: object) : Promise<object> {
    try {
      const todo = await this.TodoRepository.save(reqBody)

      return {
        message: "success",
        data: todo
      }
    } catch (error) {
      throw error
    }
  }
}