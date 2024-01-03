import * as express from "express"
import TodoControllers from "../controllers/TodoControllers"
import AuthControllers from "../controllers/AuthControllers"
import UploadFile from "../middlewares/UploadFile"
import AuthMiddleware from "../middlewares/Auth"
import UserControllers from "../controllers/UserControllers"

const routes = express.Router()

// Todo
routes.get("/todos", TodoControllers.find)
routes.post("/todo", AuthMiddleware.Auth, UploadFile.upload("image"), TodoControllers.create)

// auth
routes.post("/auth/register", AuthControllers.register)
routes.post("/auth/login", AuthControllers.login)

routes.delete("/user/:id", UserControllers.delete)

export default routes