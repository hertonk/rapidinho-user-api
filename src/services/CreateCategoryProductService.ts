import { getRepository } from 'typeorm';

import CategoryProduct from '../models/CategoryProduct';
import AppError from '../errors/AppError';

interface Request{
    name: string;
    description: string;
}

class CreateCategoryProductService {

    public async execute({ name, description }: Request): Promise<CategoryProduct>{
       
        const categoriesProductsRepository = getRepository(CategoryProduct);

        const checkCategoryExists = await categoriesProductsRepository.findOne({
            where: { name },
        });

        if(checkCategoryExists){
            throw new AppError('Name address already used.');
        }

        const category = categoriesProductsRepository.create({
            name,
            description
        });

        await categoriesProductsRepository.save(category);

        return category;
    }

}

export default CreateCategoryProductService;