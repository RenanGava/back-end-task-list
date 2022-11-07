import { prismaClient } from "../../prisma"

interface RequestDetailService {
    task_id: string
}

class DetailTaskService {

    async execute({ task_id }: RequestDetailService) {
        const detailTask = await prismaClient.task.findFirst({
            where: {
                id: task_id
            }
        })

        return detailTask
    }
}

export { DetailTaskService }