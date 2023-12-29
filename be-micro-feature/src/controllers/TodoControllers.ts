import { Request, Response } from "express";
import TodoServices from "../services/TodoServices";
import { createTodoSchema } from "../utils/validator/TodoValidator";
import cloudinary from "../libs/cloudinary";

export default new class TodoControllers {
  async find(req: Request, res: Response) {
    try {
      const data = await TodoServices.find()

      let response = {
        message: "success",
        data
      }

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = {
        title: req.body.title,
        description: req.body.description,
        image: res.locals.filename
      }

      const { error, value } = createTodoSchema.validate(data)
      if(error) return res.status(400).json(error.details[0].message)

      cloudinary.upload()
      const cloudinaryRes = await cloudinary.destination(value.image)

      const obj = {
        title: value.title,
        description: value.description,
        image: cloudinaryRes.secure_url
      }

      const response = await TodoServices.create(obj)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}