import { Request, Response } from "express";
import TodoServices from "../services/TodoServices";

export default new class TodoControllers {
  async find(req: Request, res: Response) {
    try {
      const response = await TodoServices.find()

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}