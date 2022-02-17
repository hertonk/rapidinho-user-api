import { Router } from "express";

import AuthenticateEmployeeService from "../services/AuthenticateEmployeeService";

const sessionsEmployeesRouter = Router();

sessionsEmployeesRouter.post('/',  async (request, response) => {

    try{
        const { email, password } = request.body;

        const authenticateUser = new AuthenticateEmployeeService();

        const { employee, token } = await authenticateUser.execute({
            email,
            password
        });

        delete employee.password;

        return response.json({ employee, token });
    } catch(err){
        return response.status(err.statusCode).json({ error: err.message });
    }
});

export default sessionsEmployeesRouter;