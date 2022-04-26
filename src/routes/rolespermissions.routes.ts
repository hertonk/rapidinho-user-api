import { Router } from "express";
import { CreateRolePermissionService } from "../services/CreateRolePermissionService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const rolesPermissionsRouter = Router();

rolesPermissionsRouter.post('/', ensureAuthenticated, async (request, response) => {

  const { roleId } = request.params;
  const { permissions } = request.body;

  const createRolePermissionService = new CreateRolePermissionService();

  const result = await createRolePermissionService.execute({
    roleId,
    permissions,
  });

  if (result instanceof Error) {
    return response.status(400).json(result.message);
  }

  return response.json(result);

});

export default rolesPermissionsRouter;