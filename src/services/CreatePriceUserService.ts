import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import PriceUser from '../models/PriceUser';
import User from '../models/User';

interface Request {
    user_id: string;
    min: string;
    max: string;
    value: number;
}

class CreatePriceUserService {

    public async execute({ user_id, min, max, value }: Request): Promise<PriceUser> {
        
        const usersRepository = getRepository(User);
        const pricesRepository = getRepository(PriceUser);

        const user = await usersRepository.findOne(user_id);

        if (!user) {
            throw new AppError('User does not exists.');
        }

        const price = pricesRepository.create({
            user_id,
            min,
            max, 
            value
        });

        await pricesRepository.save(price);

        return price;
    }

}

export default CreatePriceUserService;