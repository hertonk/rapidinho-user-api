import { Router } from "express";

import AuthenticateManagerService from "../services/AuthenticateManagerService";

const sessionsManagersRouter = Router();

sessionsManagersRouter.post('/',  async (request, response) => {

    try{
        const { email, password } = request.body;

        const authenticateUser = new AuthenticateManagerService();

        const { manager, token } = await authenticateUser.execute({
            email,
            password
        });

        delete manager.password;

        return response.json({ manager, token });
    } catch(err){
        return response.status(err.statusCode).json({ error: err.message });
    }
});

export default sessionsManagersRouter;