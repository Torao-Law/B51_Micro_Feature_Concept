import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/validator/AuthValidator";
import AuthServices from "../services/AuthServices";
import UserServices from "../services/UserServices";

export default new class UserControllers {
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const response = await UserServices.delete(id)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}