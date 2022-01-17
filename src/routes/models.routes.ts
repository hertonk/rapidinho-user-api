import { Router } from "express";
import { getRepository } from 'typeorm';

import Model from "../models/Model";

import CreateModelService from "../services/CreateModelService";
import UpdateModelService from "../services/UpdateModelService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const modelsRouter = Router();

modelsRouter.use(ensureAuthenticated);
modelsRouter.get('/', async (request, response) => {
    
    const modelsRepository = getRepository(Model);
    const models = await modelsRepository.find();

    return response.json(models);
});

modelsRouter.post('/',  async (request, response) => {

    try{
        const { name, brand, obs, photo } = request.body;

        const createModel = new CreateModelService();

        const model = await createModel.execute({
            name, 
            brand,
            obs,
            photo
        });
        
        return response.json(model);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

modelsRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const modelsRepository = getRepository(Model);
    const model = await modelsRepository.findOne(id);

    return response.json(model);
});

modelsRouter.patch('/:id',  async (request, response) => {

    try{
        const { id } = request.params; 

        const { name, brand, obs, photo } = request.body;

        const updateModel = new UpdateModelService();

        const model = await updateModel.execute({
            id,
            name, 
            brand,
            obs,
            photo
        });
        
        return response.json(model);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

export default modelsRouter;