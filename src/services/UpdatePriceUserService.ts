import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import PriceUser from '../models/PriceUser';

interface Request {
    id: string;
    user_id: string;
    min: string;
    max: string;
    value: number;
}

class UpdatePriceService {

    public async execute({
        id, 
        user_id,
        min,
        max,
        value
     }: Request): Promise<PriceUser> {
        const pricesRepository = getRepository(PriceUser);

        const price = await pricesRepository.findOne(id);

        if(!price){
            throw new AppError('Price user dont existis.', 401);
        }

        price.min = min;
        price.max = max;
        price.value = value;

        await pricesRepository.save(price);

        return price;
    }

}

export default UpdatePriceService;