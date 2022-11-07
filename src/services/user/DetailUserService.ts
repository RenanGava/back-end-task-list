import { prismaClient } from "../../prisma";

interface DetailUserRequest {
    user_id: string
}

class DetailUserService {

    async execute({ user_id }: DetailUserRequest) {
        const user = prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select:{
                id: true,
                email: true,
                name: true,
                tasks: true,
                
            }
        })

        return user
    }
}

export { DetailUserService }