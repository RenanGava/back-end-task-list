import express, { Response, Request, NextFunction } from "express";
import cors from 'cors'
import { router } from "./routes";
import 'express-async-errors'



const app = express()

app.use(express.json())
app.use(cors())

// rotas do app
app.use(router)


// Recebe os erros da aplicação
app.use((err: Error, req:Request, res:Response, next:NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "Error",
        message: "Internal Server Error"
    })
})

app.listen(3333, () => {
    console.log('Server Rodando!!');
})