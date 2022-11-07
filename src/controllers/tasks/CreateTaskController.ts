import { Request, Response } from "express";
import { CreateTaskService } from "../../services/tasks/CreateTaskService";


class CreateTaskController {

    async handle(req: Request, res: Response) {

        const { title, description, user_id } = req.body
        const { path: banner } = req.file
        
        const createTaskService = new CreateTaskService()

        const task = await createTaskService.execute({ title, description, user_id, banner })

        return res.status(200).json(task)

    }
}

export { CreateTaskController }