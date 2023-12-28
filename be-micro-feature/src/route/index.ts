import * as express from "express"
import TodoControllers from "../controllers/TodoControllers"

const routes = express.Router()

// Todo
routes.get("/todos", TodoControllers.find)

export default routes