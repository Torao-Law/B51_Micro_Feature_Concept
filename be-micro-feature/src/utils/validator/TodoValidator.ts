import * as Joi from "joi"

export const createTodoSchema = Joi.object({
  title: Joi.string().min(10).max(250).required(),
  description: Joi.string().max(250).required(),
  image: Joi.string().allow(null)
})