import express, { Response, Request, NextFunction } from "express";
// lembrar que a lib 'express-async-errors' é sempre em segundo lugar no import
import 'express-async-errors'
import cors from 'cors'
import { router } from "./routes";



const app = express()

app.use(express.json())
app.use(cors())

// rotas do app
app.use(router)


// Recebe os erros da aplicação
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    next(err)

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

})

app.listen(3333, () => {
    console.log('Server Rodando!!');
})