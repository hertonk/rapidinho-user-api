import { Router } from "express";
import multer from 'multer';
import uploadConfig from "../config/upload";

import CreateUserService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import { getRepository } from "typeorm";
import User from "../models/User";
import UserRole from "../models/UsersRoles";

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/',  async (request, response) => {

    try{
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();

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


usersRouter.patch(
    "/avatar",
    ensureAuthenticated,
    upload.single('avatar'),
    async (request, response) => {
    
        try {
            const updateUserAvatar = new UpdateUserAvatarService();

            const user = await updateUserAvatar.execute({
                user_id: request.user.id,
                avatarFileName: request.file?.filename,
            });

            return response.json(user);

        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
});

usersRouter.get('/roles', ensureAuthenticated, async (request, response) => {

    const id = request.user.id;

    const rolesRepositories = getRepository(UserRole);

    const roles = await rolesRepositories.find({
        where: {
            user_id: id
        }
    });

    return response.json(roles);

});

usersRouter.get('/', ensureAuthenticated, async (request, response) => {

    const usersRepositories = getRepository(User);

    const users = await usersRepositories.find();

    return response.json(users);

});


export default usersRouter;