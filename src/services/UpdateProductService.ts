import { getRepository } from 'typeorm';

import Product from '../models/Product';

import AppError from '../errors/AppError';

interface Request {
    id: string;
    manufacturer_id: string;
    category_id: string;
    model: string;
    power: string;
    inmetro: string;
    description: string;
}

class UpdateProductService {

    public async execute({ 
        id,  
        manufacturer_id,
        category_id,
        model,
        power,
        inmetro,
        description
    }: Request): Promise<Product> {
        const productsRepository = getRepository(Product);

        const product = await productsRepository.findOne(id);

        if(!product){
            throw new AppError('Product dont existis.', 401);
        }

        product.manufacturer_id = manufacturer_id;
        product.category_id = category_id;
        product.model = model;
        product.power = power;
        product.inmetro = inmetro;
        product.description = description;

        await productsRepository.save(product);

        return product;
    }

}

export default UpdateProductService;