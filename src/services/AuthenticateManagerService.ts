import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Manager from '../models/Manager';
import authConfig from  '../config/auth';
import AppError from '../errors/AppError';

interface Request {
    email: string;
    password: string;
}

interface Response {
    manager: Manager;
    token: string;
}

class AuthenticateManagerService {

    public async execute({ email, password }: Request): Promise<Response>{
        const usersRepository = getRepository(Manager);

        const manager = await usersRepository.findOne({ where: { email } });

        if(!manager){
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const passwordMatched = await compare(password, manager.password);

        if(!passwordMatched){
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: manager.id,
            expiresIn,
        });

        return {
            manager,
            token
        }

    }

}

export default AuthenticateManagerService;