import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/validator/AuthValidator";
import AuthServices from "../services/AuthServices";

export default new class AuthControllers {
  async register(req: Request, res: Response) {
    try {
      const data = req.body

      const { error, value } = registerSchema.validate(data)
      if(error) return res.status(400).json(error.details[0].message)

      const response = await AuthServices.register(value)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = req.body

      const { error, value } = loginSchema.validate(data)
      if(error) return res.status(400).json(error.details[0].message)

      const response = await AuthServices.login(value)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}