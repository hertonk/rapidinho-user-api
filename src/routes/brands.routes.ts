import { Router } from "express";
import { getRepository } from 'typeorm';

import Brand from "../models/Brand";

import CreateBrandService from "../services/CreateBrandService";
import UpdateBrandService from "../services/UpdateBrandService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const brandsRouter = Router();

brandsRouter.use(ensureAuthenticated);
brandsRouter.get('/', async (request, response) => {
    
    const brandsRepository = getRepository(Brand);
    const brands = await brandsRepository.find();

    return response.json(brands);
});

brandsRouter.post('/',  async (request, response) => {

    try{
        const { name } = request.body;

        const createBrand = new CreateBrandService();

        const brand = await createBrand.execute({
            name, 
        });
        
        return response.json(brand);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

brandsRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const brandsRepository = getRepository(Brand);
    const brand = await brandsRepository.findOne(id);

    return response.json(brand);
});

brandsRouter.patch('/:id',  async (request, response) => {

    try{
        const { id } = request.params;

        const { name } = request.body;

        const updateBrand = new UpdateBrandService();

        const brand = await updateBrand.execute({
            id,
            name, 
        });
        
        return response.json(brand);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

export default brandsRouter;