import { Router } from "express";
import { CreatePermissionService } from "../services/CreatePermissionService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const permissionsRouter = Router();

permissionsRouter.post('/', ensureAuthenticated, async (request, response) => {

    const { name, description } = request.body;

    const createPermissionService = new CreatePermissionService();

    const result = await createPermissionService.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

});

export default permissionsRouter;