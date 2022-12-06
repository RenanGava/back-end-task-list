import { prismaClient } from "../../prisma";

interface ListTaskRequest{
    user_id: string
}

class ListTaskService{
    async execute({ user_id }:ListTaskRequest) {
        const tasks = await prismaClient.task.findMany({
            where:{
                user_id: user_id
            }
        })

        return tasks
    }
}

export { ListTaskService }