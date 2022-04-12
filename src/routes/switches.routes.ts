import { Router } from "express";
import { getRepository } from 'typeorm';
import Switche from "../models/Switche";

import UpdateSwitcheService from "../services/UpdateSwitcheService";
import CreateSwitcheService from "../services/CreateSwitcheService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const switchesRouter = Router();

switchesRouter.get('/', ensureAuthenticated, async (request, response) => {

    const switchesRepository = getRepository(Switche);

    const switche = await switchesRepository.find();

    return response.json(switche);

});

switchesRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const switchesRepository = getRepository(Switche);

    const switche = await switchesRepository.findOne(id);

    return response.json(switche);

});

switchesRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           name
         } = request.body;

        const createSwitche = new CreateSwitcheService();

        const swicthe = await createSwitche.execute({ 
            name
        });

        return response.json(swicthe);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

switchesRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,
            name
         } = request.body;

        const updateSwitche = new UpdateSwitcheService();

        const switche = await updateSwitche.execute({ 
            id,  
            name
        });

        return response.json(switche);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default switchesRouter;