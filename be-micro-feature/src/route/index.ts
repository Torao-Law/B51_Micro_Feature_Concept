import * as express from "express"
import TodoControllers from "../controllers/TodoControllers"
import AuthControllers from "../controllers/AuthControllers"
import UploadFile from "../middlewares/UploadFile"
import AuthMiddleware from "../middlewares/Auth"

const routes = express.Router()

// Todo
routes.get("/todos", AuthMiddleware.Auth, TodoControllers.find)
routes.post("/todo", UploadFile.upload("image"), TodoControllers.create)

routes.post("/auth/register", AuthControllers.register)
routes.post("/auth/login", AuthControllers.login)

export default routes