import { Router } from "express";
import { CreateUserAccessControlListService } from "../services/CreateUserAccessControlListService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const usersACLRouter = Router();

usersACLRouter.post('/', ensureAuthenticated, async (request, response) => {
 
    const { userId, permissions, roles } = request.body;

    const createUserACLService = new CreateUserAccessControlListService();

    const result = await createUserACLService.execute({
      userId,
      permissions,
      roles,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

});

export default usersACLRouter;