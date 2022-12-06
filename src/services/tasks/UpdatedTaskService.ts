import { prismaClient } from "../../prisma";

interface UpdatedTaskRequest{
    task_id: string;
    description?: string;
    status?: boolean | false;
    completed_at: string
}

class UpdatedTaskService{
    async execute({ task_id, status, description,completed_at }: UpdatedTaskRequest) {
        const task = await prismaClient.task.update({
            where:{
                id: task_id
            },
            data:{
                status: status,
                completed_at: completed_at,
                description: description
            }
        })

        return task
    }
}

export { UpdatedTaskService }