import { Router } from "express";
import { getRepository } from 'typeorm';

import Category from "../models/Category";

import CreateCategoryService from "../services/CreateCategoryService";
import UpdateCategoryService from "../services/UpdateCategoryService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const categoriesRouter = Router();

categoriesRouter.use(ensureAuthenticated);
categoriesRouter.get('/', async (request, response) => {
    
    const categoriesRepository = getRepository(Category);
    const categories = await categoriesRepository.find();

    return response.json(categories);
});

categoriesRouter.post('/',  async (request, response) => {

    try{
        const { name, description } = request.body;

        const createCategory = new CreateCategoryService();

        const category = await createCategory.execute({
            name, 
            description
        });
        
        return response.json(category);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

categoriesRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const categoriesRepository = getRepository(Category);
    const category = await categoriesRepository.findOne(id);

    return response.json(category);
});

categoriesRouter.patch('/:id',  async (request, response) => {

    try{
        const { id } = request.params;

        const { name, description } = request.body;

        const updateCategory = new UpdateCategoryService();

        const category = await updateCategory.execute({
            id,
            name, 
            description
        });
        
        return response.json(category);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

export default categoriesRouter;