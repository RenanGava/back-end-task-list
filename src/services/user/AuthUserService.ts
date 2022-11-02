import { prismaClient } from "../../prisma"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest{
    email: string
    password: string
}

class AuthUserService{
    async execute({ email, password }: AuthRequest){
        
        const user = await  prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error('User Not Already Exists!')
        }

        const passwordMatch = await compare(password, user.password)

        if(!password){
            throw new Error('Password Incorrect!!')
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_HASH_TOKEN,
            {
                expiresIn: 30,
                subject: user.id
            }
        )

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            token
        }
    }
}

export { AuthUserService }