import { Router } from "express";
import { getRepository } from 'typeorm';
import Product from "../models/Product";

import UpdateProductService from "../services/UpdateProductService";
import CreateProductService from "../services/CreateProductService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const productsRouter = Router();

productsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const productsRepository = getRepository(Product);

    const products = await productsRepository.find();

    return response.json(products);

});

productsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(id);

    return response.json(product);

});

productsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            manufacturer_id,
            category_id,
            name,
            model,
            power,
            inmetro,
            description,
            photo,
         } = request.body;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute({ 
            manufacturer_id,
            category_id,
            name,
            model,
            power,
            inmetro,
            description,
            photo,
        });

        return response.json(product);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

productsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            manufacturer_id,
            category_id,
            name,
            model,
            power,
            inmetro,
            description,
            photo,
         } = request.body;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute({ 
            id,  
            manufacturer_id,
            category_id,
            name,
            model,
            power,
            inmetro,
            description,
            photo,
        });

        return response.json(product);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

productsRouter.delete('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const productsRepository = getRepository(Product);

    const product = await productsRepository.delete(id);

    return response.json();

});

export default productsRouter;