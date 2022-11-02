import { Router, Response, Request } from "express"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { isAuhtenticated } from "./middlewares/IsAuthenticated"
import { upload } from "./middlewares/UploadImage"

const router = Router()


// === ROTAS USER ===
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

// === ROTAS TASKS AUTENTICADAS ===

// router.post('/task', upload.single('file'), isAuhtenticated,{
    
// })


export { router }