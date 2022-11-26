import { Request, Response } from "express";
import { UpdatedTaskService } from "../../services/tasks/UpdatedTaskService";


class UpdatedTaskController{

    async handle(req: Request, res: Response) {
        const { task_id, description, status } = req.body
        const updatedTaskService = new UpdatedTaskService()

        const task = await updatedTaskService.execute({ task_id, description, status })

        return res.json(task)
    }
}

export { UpdatedTaskController }