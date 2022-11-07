import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

interface Payload{
    sub: string
}


export function isAuhtenticated(req: Request, res: Response, next: NextFunction){
    
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).json({message: 'Not alredy exist token'})
    }

    const [, token] = authToken.split(" ")

    try{
        
        const { sub } = verify(token, process.env.JWT_HASH_TOKEN) as Payload

        req.user_id = sub

        return next()

    }catch(err){
        return res.status(401).json({message:"token expire"})
    }
}