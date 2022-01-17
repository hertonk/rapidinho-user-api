import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Product from "../models/Product";

interface Request{
    manufacturer: string;
    category: string;
    name: string;
    description: string;
    code: string;
    photo: string;
    unit: string;
    value: number;
    stock: number;
}

class CreateProductService {

    public async execute({ 
        manufacturer,
        category,
        name,
        description,
        code,
        photo,
        unit,
        value,
        stock
     }: Request): Promise<Product>{
        const productsRepository = getRepository(Product);

        const checkCodeExists = await productsRepository.findOne({
            where: { code },
        });

        if(checkCodeExists){
            throw new AppError('Code already used.');
        }

        const product = productsRepository.create({
            manufacturer,
            category,
            name,
            description,
            code,
            photo,
            unit,
            value,
            stock
        });

        await productsRepository.save(product);

        return product;
    }
}

export default CreateProductService;