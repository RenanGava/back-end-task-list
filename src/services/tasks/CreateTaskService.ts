import { prismaClient } from "../../prisma";

interface CreateTaskRequest{
    user_id: string
    title: string
    description: string
    banner?: string
}

class CreateTaskService{
    async execute({ title, description, banner, user_id}: CreateTaskRequest){
        const createTask = await prismaClient.task.create({
            data:{
                title: title,
                description: description,
                banner: banner,
                status: false,
                user_id: user_id
            },select:{
                id:true,
                user_id: true,
                title:true,
                banner: true,
                status: true,
                description: true,
                created_at: true
            }
        })

        return createTask
    }
}

export { CreateTaskService }