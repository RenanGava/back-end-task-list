import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/tasks/DeleteTaskService";


class DeleteTaskController {

    async handle(req: Request, res: Response) {
        const task_id = req.query.task_id as string

        const deleteTaskService = new DeleteTaskService()

        const task = await deleteTaskService.execute({ task_id })

        return res.json(task)
    }

}

export { DeleteTaskController }