import { Router, Response, Request } from "express"
import { CreateTaskController } from "./controllers/tasks/CreateTaskController"
import { DeleteTaskController } from "./controllers/tasks/DeleteTaskController"
import { DetailTaskController } from "./controllers/tasks/DetailTaskController"
import { ListTaskController } from "./controllers/tasks/ListTaskController"
import { UpdatedTaskController } from "./controllers/tasks/UpdatedTaskController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { DetailUserController } from "./controllers/user/DetailUserController"
import { isAuhtenticated } from "./middlewares/IsAuthenticated"
import { upload } from "./middlewares/UploadImage"

const router = Router()


// === ROTAS USER ===
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/user/me', isAuhtenticated, new DetailUserController().handle)

// === ROTAS TASKS AUTENTICADAS ===
router.post('/create/task', upload.single('file'), isAuhtenticated, new CreateTaskController().handle)
router.put('/update/task', isAuhtenticated, new UpdatedTaskController().handle)
router.get('/list/tasks', isAuhtenticated, new ListTaskController().handle)
router.get('/task/detail', isAuhtenticated, new DetailTaskController().handle)
router.delete('/delete/task', isAuhtenticated, new DeleteTaskController().handle)


export { router }