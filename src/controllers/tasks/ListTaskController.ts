import { Request, Response } from "express";
import { ListTaskService } from "../../services/tasks/ListTaskService";


class ListTaskController {
    async handle(req: Request, res: Response) {

        const user_id = req.query.user_id as string

        const listTaskService = new ListTaskService()
        

        const tasks = await listTaskService.execute({ user_id })

        return res.json(tasks)
    }
}

export { ListTaskController }