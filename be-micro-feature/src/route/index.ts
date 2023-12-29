import * as express from "express"
import TodoControllers from "../controllers/TodoControllers"
import UploadFile from "../middlewares/UploadFile"

const routes = express.Router()

// Todo
routes.get("/todos", TodoControllers.find)
routes.post("/todo", UploadFile.upload("image"), TodoControllers.create)

export default routes