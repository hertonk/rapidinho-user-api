import { Router } from "express";
import { getRepository } from 'typeorm';
import Tension from "../models/Tension";

import UpdateTensionService from "../services/UpdateTensionService";
import CreateTensionService from "../services/CreateTensionService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const tensionRouter = Router();

tensionRouter.get('/', ensureAuthenticated, async (request, response) => {

    const tensionsRepository = getRepository(Tension);

    const tension = await tensionsRepository.find();

    return response.json(tension);

});

tensionRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const tenionsRepository = getRepository(Tension);

    const tension = await tenionsRepository.findOne(id);

    return response.json(tension);

});

tensionRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           css_id,
           tension
         } = request.body;

        const createTension = new CreateTensionService();

        const tensionOb = await createTension.execute({ 
            css_id,
            tension
        });

        return response.json(tensionOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

tensionRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            css_id,
            tension
         } = request.body;

        const updateTension = new UpdateTensionService();

        const tensionOb = await updateTension.execute({ 
            id,  
            css_id,
            tension
        });

        return response.json(tensionOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

tensionRouter.delete('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const tenionsRepository = getRepository(Tension);

    const tension = await tenionsRepository.delete(id);

    return response.json();

});

export default tensionRouter;