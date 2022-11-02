import { hash } from 'bcryptjs'
import { prismaClient } from '../../prisma'


interface UserRequest {
    name: string
    email: string
    password: string
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

        if (!email) {
            throw new Error('Email Incorret !')
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error('User Already Exists !')
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                email: email,
                name: name,
                password: passwordHash
            },
            select:{
                name: true,
                email: true,
                created_at: true,
            }
        })

        return user
    }
}

export { CreateUserService }