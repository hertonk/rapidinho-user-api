import { Router } from "express";
import multer from 'multer';
import uploadConfig from "../config/upload";

import CreateEmployeeService from "../services/CreateEmployeeService";
import UpdateEmployeeAvatarService from "../services/UpdateEmployeeAvatarService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const employeesRouter = Router();
const upload = multer(uploadConfig);

employeesRouter.post('/',  async (request, response) => {

    try{
        const { name, email, password } = request.body;

        const createUser = new CreateEmployeeService();

        const user = await createUser.execute({ 
            name,
            email,
            password
        });

        delete user.password;

        return response.json(user);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});


employeesRouter.patch(
    "/avatar",
    ensureAuthenticated,
    upload.single('avatar'),
    async (request, response) => {
    
        try {
            const updateUserAvatar = new UpdateEmployeeAvatarService();

            const user = await updateUserAvatar.execute({
                user_id: request.user.id,
                avatarFileName: request.file?.filename,
            });

            return response.json(user);

        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
});


export default employeesRouter;