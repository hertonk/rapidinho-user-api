import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import Employee from '../models/Employee';

import AppError from '../errors/AppError';

interface Request {
    user_id: string;
    avatarFileName: string | undefined;
}

class UpdateEmployeeAvatarService {

    public async execute({ user_id, avatarFileName }: Request): Promise<Employee> {
        const usersRepository = getRepository(Employee);

        const employee = await usersRepository.findOne(user_id);

        if(!employee){
            throw new AppError('Only authenticated users can change avatar.', 401);
        }

        if(employee.avatar){
            const userAvatarFilePath = path.join(uploadConfig.directory, employee.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if(userAvatarFileExists){
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        employee.avatar = avatarFileName;

        delete employee.password;

        await usersRepository.save(employee);

        return employee;
    }

}

export default UpdateEmployeeAvatarService;