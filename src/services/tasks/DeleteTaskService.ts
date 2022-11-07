import { prismaClient } from "../../prisma"

interface RequestDeleteTask{
    task_id: string
}


class DeleteTaskService{

    async execute({ task_id }:RequestDeleteTask){

        const deleteTask = await prismaClient.task.delete({
            where:{
                id: task_id
            }
        })

        return deleteTask
    }

}


export { DeleteTaskService }