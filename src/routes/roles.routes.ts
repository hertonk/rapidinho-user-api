import { Router } from "express";
import { CreateRoleService } from "../services/CreateRoleService";
import { is } from "../middlewares/permissions";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const rolesRouter = Router();

rolesRouter.post('/', async (request, response) => {

    const { name, description } = request.body;

    const createRoleService = new CreateRoleService();

    const result = await createRoleService.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
    
});

export default rolesRouter;