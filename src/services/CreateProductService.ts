import { getRepository } from 'typeorm';

import Product from '../models/Product';
import AppError from '../errors/AppError';

interface Request{
    manufacturer_id: string;
    category_id: string;
    name: string;
    model: string;
    power: string;
    inmetro: string;
    description: string;
    photo: string;
}

class CreateProductService {

    public async execute({ 
        manufacturer_id,
        category_id,
        name,
        model,
        power,
        inmetro,
        description,
        photo,
     }: Request): Promise<Product>{
       
        const productsRepository = getRepository(Product);

        const checkProductExists = await productsRepository.findOne({
            where: { name },
        });

        if(checkProductExists){
            throw new AppError('product name already used.');
        }

        const product = productsRepository.create({
            manufacturer_id,
            category_id,
            name,
            model,
            power,
            inmetro,
            description,
            photo
        });

        await productsRepository.save(product);

        return product;
    }

}

export default CreateProductService;