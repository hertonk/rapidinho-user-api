import { Router } from "express";
import { getRepository } from 'typeorm';
import Cable from "../models/Cable";

import UpdateCableService from "../services/UpdateCableService";
import CreateCableService from "../services/CreateCableService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const cablesRouter = Router();

cablesRouter.get('/', ensureAuthenticated, async (request, response) => {

    const cablesRepository = getRepository(Cable);

    const cable = await cablesRepository.find();

    return response.json(cable);

});

cablesRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const cablesRepository = getRepository(Cable);

    const cable = await cablesRepository.findOne(id);

    return response.json(cable);

});

cablesRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           name
         } = request.body;

        const createCable = new CreateCableService();

        const cable = await createCable.execute({ 
            name
        });

        return response.json(cable);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

cablesRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,
            name
         } = request.body;

        const updateCable = new UpdateCableService();

        const cable = await updateCable.execute({ 
            id,  
            name
        });

        return response.json(cable);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

cablesRouter.delete('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const cablesRepository = getRepository(Cable);

    const cable = await cablesRepository.delete(id);

    return response.json();

});

export default cablesRouter;