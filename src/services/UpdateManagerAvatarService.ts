import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import Manager from '../models/Manager';

import AppError from '../errors/AppError';

interface Request {
    user_id: string;
    avatarFileName: string | undefined;
}

class UpdateManagerAvatarService {

    public async execute({ user_id, avatarFileName }: Request): Promise<Manager> {
        const usersRepository = getRepository(Manager);

        const manager = await usersRepository.findOne(user_id);

        if(!manager){
            throw new AppError('Only authenticated users can change avatar.', 401);
        }

        if(manager.avatar){
            const userAvatarFilePath = path.join(uploadConfig.directory, manager.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if(userAvatarFileExists){
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        manager.avatar = avatarFileName;

        delete manager.password;

        await usersRepository.save(manager);

        return manager;
    }

}

export default UpdateManagerAvatarService;