import { getRepository } from 'typeorm';

import Category from "../models/Category";

interface Request{
    name: string;
    description: string;
}

class CreateCategoryService {

    public async execute({ name, description }: Request): Promise<Category>{
        const categoriesRepository = getRepository(Category);

        const category = categoriesRepository.create({
            name,
            description
        });

        await categoriesRepository.save(category);

        return category;
    }
}

export default CreateCategoryService;