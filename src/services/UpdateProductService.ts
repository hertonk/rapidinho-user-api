import { getRepository } from 'typeorm';

import Product from '../models/Product';

import AppError from '../errors/AppError';

interface Request {
    id: string;
    manufacturer_id: string;
    category_id: string;
    name: string;
    model: string;
    power: string;
    inmetro: string;
    description: string;
    photo: string;
}

class UpdateProductService {

    public async execute({ 
        id,  
        manufacturer_id,
        category_id,
        name,
        model,
        power,
        inmetro,
        description,
        photo,
    }: Request): Promise<Product> {
        const productsRepository = getRepository(Product);

        const product = await productsRepository.findOne(id);

        if(!product){
            throw new AppError('Product dont existis.', 401);
        }

        product.manufacturer_id = manufacturer_id;
        product.category_id = category_id;
        product.name = name;
        product.model = model;
        product.power = power;
        product.inmetro = inmetro;
        product.description = description;
        product.photo = photo;

        await productsRepository.save(product);

        return product;
    }

}
a
export default UpdateProductService;