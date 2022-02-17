import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Employee from '../models/Employee';
import authConfig from  '../config/auth';
import AppError from '../errors/AppError';

interface Request {
    email: string;
    password: string;
}

interface Response {
    employee: Employee;
    token: string;
}

class AuthenticateEmployeeService {

    public async execute({ email, password }: Request): Promise<Response>{
        const usersRepository = getRepository(Employee);

        const employee = await usersRepository.findOne({ where: { email } });

        if(!employee){
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const passwordMatched = await compare(password, employee.password);

        if(!passwordMatched){
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: employee.id,
            expiresIn,
        });

        return {
            employee,
            token
        }

    }

}

export default AuthenticateEmployeeService;