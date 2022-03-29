import { Router } from "express";
import { getRepository } from 'typeorm';
import CategoryProduct from "../models/CategoryProduct";

import CreateCategoryProductService from "../services/CreateCategoryProductService";
import UpdateCategoryProductService from "../services/UpdateCategoryProductService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const categoriesProductsRouter = Router();

categoriesProductsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const categoriesRepository = getRepository(CategoryProduct);

    const categories = await categoriesRepository.find();

    return response.json(categories);

});

categoriesProductsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const categoriesRepository = getRepository(CategoryProduct);

    const category = await categoriesRepository.findOne(id);

    return response.json(category);

});

categoriesProductsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const { name, description } = request.body;

        const createCategoryProduct = new CreateCategoryProductService();

        const category = await createCategoryProduct.execute({ 
            name,
            description
        });

        return response.json(category);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

categoriesProductsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { id, name, description } = request.body;

        const updateCategoryProduct = new UpdateCategoryProductService();

        const category = await updateCategoryProduct.execute({ 
            id,
            name,
            description
        });

        return response.json(category);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default categoriesProductsRouter;