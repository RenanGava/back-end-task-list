import { prismaClient } from "../../prisma";

interface UpdatedTaskRequest{
    task_id: string;
    description?: string;
    status?: boolean | false;
}

class UpdatedTaskService{
    async execute({ task_id, status, description }: UpdatedTaskRequest) {
        const task = await prismaClient.task.update({
            where:{
                id: task_id
            },
            data:{
                status: status,
                description: description
            }
        })

        return task
    }
}

export { UpdatedTaskService }