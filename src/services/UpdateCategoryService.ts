import { getRepository } from 'typeorm';

import Category from '../models/Category';

interface Request {
    id: string;
    name: string; 
    description: string;
}

class UpdateCategoryService {

    public async execute({ id, name, description }: Request): Promise<Category> {
        const categoriesRepository = getRepository(Category);

        const category = await categoriesRepository.findOne(id);

        category?.name = name;
        category?.description = description;

        await categoriesRepository.save(category);

        return category;
    }

}

export default UpdateCategoryService;