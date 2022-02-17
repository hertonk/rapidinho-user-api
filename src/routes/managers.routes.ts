import { Router } from "express";
import multer from 'multer';
import uploadConfig from "../config/upload";

import CreateManagerService from "../services/CreateManagerService";
import UpdateManagerAvatarService from "../services/UpdateManagerAvatarService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const managersRouter = Router();
const upload = multer(uploadConfig);

managersRouter.post('/',  async (request, response) => {

    try{
        const { name, email, password } = request.body;

        const createUser = new CreateManagerService();

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


managersRouter.patch(
    "/avatar",
    ensureAuthenticated,
    upload.single('avatar'),
    async (request, response) => {
    
        try {
            const updateUserAvatar = new UpdateManagerAvatarService();

            const user = await updateUserAvatar.execute({
                user_id: request.user.id,
                avatarFileName: request.file?.filename,
            });

            return response.json(user);

        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
});


export default managersRouter;