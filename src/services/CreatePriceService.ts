import { getRepository } from 'typeorm';

import Price from '../models/Price';

interface Request {
    min: string;
    max: string;
    value: string;
}

class CreatePriceService {

    public async execute({ min, max, value }: Request): Promise<Price> {
        const pricesRepository = getRepository(Price);

        const price = pricesRepository.create({
            min,
            max, 
            value
        });

        await pricesRepository.save(price);

        return price;
    }

}

export default CreatePriceService;