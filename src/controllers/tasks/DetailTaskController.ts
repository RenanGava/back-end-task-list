import { Request, Response } from "express"
import { DetailTaskService } from "../../services/tasks/DetailTaskService"


class DetailTaskController {
    async handle(req: Request, res: Response) {
        const task_id = req.query.task_id as string

        const detailTaskService = new DetailTaskService()

        const detailTask = await detailTaskService.execute({ task_id })

        return res.json(detailTask)
    }
}

export { DetailTaskController }