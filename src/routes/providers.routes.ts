import { Router } from "express";
import { getRepository } from 'typeorm';
import Provider from "../models/Provider";

import UpdateProviderService from "../services/UpdateProviderService";
import CreateProviderService from "../services/CreateProviderService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const providersRouter = Router();

providersRouter.get('/', ensureAuthenticated, async (request, response) => {

    const providersRepository = getRepository(Provider);

    const providers = await providersRepository.find();

    return response.json(providers);

});

providersRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const providersRepository = getRepository(Provider);

    const prodiver = await providersRepository.findOne(id);

    return response.json(prodiver);

});

providersRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           name
         } = request.body;

        const createProvider = new CreateProviderService();

        const provider = await createProvider.execute({ 
            name
        });

        return response.json(provider);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

providersRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            name
         } = request.body;

        const updateProvider = new UpdateProviderService();

        const provider = await updateProvider.execute({ 
            id,  
            name
        });

        return response.json(provider);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default providersRouter;