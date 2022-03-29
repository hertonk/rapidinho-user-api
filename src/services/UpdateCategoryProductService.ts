import { getRepository } from 'typeorm';

import CategoryProduct from '../models/CategoryProduct';

import AppError from '../errors/AppError';

interface Request {
    id: string;
    name: string;
    description: string;
}

class UpdateCategoryProductService {

    public async execute({ id, name, description }: Request): Promise<CategoryProduct> {
        const categorisProductsRepository = getRepository(CategoryProduct);

        const category = await categorisProductsRepository.findOne(id);

        if(!category){
            throw new AppError('Product Category dont existis.', 401);
        }

        category.name = name;
        category.description = description;

        await categorisProductsRepository.save(category);

        return category;
    }

}

export default UpdateCategoryProductService;