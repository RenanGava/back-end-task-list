import { prismaClient } from "../../prisma";

interface ListTAskRequest{
    user_id: string
}

class ListTaskService{
    async execute({ user_id }:ListTAskRequest) {
        const tasks = await prismaClient.task.findMany({
            where:{
                user_id: user_id
            }
        })

        return tasks
    }
}

export { ListTaskService }