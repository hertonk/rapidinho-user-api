import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Price from '../models/Price';

interface Request {
    id: string;
    min: string;
    max: string;
    value: number;
}

class UpdatePriceService {

    public async execute({ id, min, max, value }: Request): Promise<Price> {
        const pricesRepository = getRepository(Price);

        const price = await pricesRepository.findOne(id);

        if(!price){
            throw new AppError('Price dont existis.', 401);
        }

        price.min = min;
        price.max = max;
        price.value = value;

        await pricesRepository.save(price);

        return price;
    }

}

export default UpdatePriceService;