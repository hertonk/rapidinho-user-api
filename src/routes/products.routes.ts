import { Router } from "express";
import { getRepository } from 'typeorm';

import Product from "../models/Product";

import CreateProductService from "../services/CreateProductService";
import UpdateProductService from "../services/UpdateProductService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const productsRouter = Router();

productsRouter.use(ensureAuthenticated);
productsRouter.get('/', async (request, response) => {
    
    const productsRepository = getRepository(Product);
    const products = await productsRepository.find();

    return response.json(products);
});

productsRouter.post('/',  async (request, response) => {

    try{
        const { 
            manufacturer,
            category,
            name,
            description,
            code,
            photo,
            unit,
            value,
            stock
         } = request.body;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute({
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
        
        return response.json(product);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

productsRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const productsRepository = getRepository(Product);
    const product = await productsRepository.findOne(id);

    return response.json(product);
});

productsRouter.patch('/:id',  async (request, response) => {

    try{
        const { id } = request.params; 

        const { 
            manufacturer,
            category,
            name,
            description,
            code,
            photo,
            unit,
            value,
            stock
         } = request.body;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute({
            id,
            manufacturer,
            category,
            name,
            description,
            photo,
            unit,
            value,
            stock
        });
        
        return response.json(product);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

export default productsRouter;