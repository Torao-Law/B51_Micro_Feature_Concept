import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

export default new  class UserService {
  private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)

  async delete(idUser: string) : Promise<object | string> {
    try {
      const response = await this.UserRepository.delete(idUser)

      return {
        message: "success",
        data: response
      }
    } catch (error) {
      throw error
    }
  }
}