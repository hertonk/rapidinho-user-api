import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Employee from '../models/Employee';
import AppError from '../errors/AppError';

interface Request{
    name: string;
    email: string;
    password: string;
}

class CreateEmployeeService {

    public async execute({ name, email, password }: Request): Promise<Employee>{
       
        const usersRepository = getRepository(Employee);

        const checkUserExists = await usersRepository.findOne({
            where: { email },
        });

        if(checkUserExists){
            throw new AppError('Email address already used.');
        }

        const hashPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashPassword,
        });

        await usersRepository.save(user);

        return user;
    }

}

export default CreateEmployeeService;