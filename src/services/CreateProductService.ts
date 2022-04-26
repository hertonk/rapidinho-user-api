import { getRepository } from 'typeorm';

import Product from '../models/Product';

interface Request{
    manufacturer_id: string;
    category_id: string;
    model: string;
    power: string;
    inmetro: string;
    description: string;
}

class CreateProductService {

    public async execute({ 
        manufacturer_id,
        category_id,
        model,
        power,
        inmetro,
        description,
     }: Request): Promise<Product>{
       
        const productsRepository = getRepository(Product);

        const product = productsRepository.create({
            manufacturer_id,
            category_id,
            model,
            power,
            inmetro,
            description
        });

        await productsRepository.save(product);

        return product;
    }

}

export default CreateProductService;