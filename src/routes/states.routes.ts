import { Router } from "express";
import { getRepository } from 'typeorm';
import State from "../models/State";

import UpdateStateService from "../services/UpdateStateService";
import CreateStateService from "../services/CreateStateService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const statesRouter = Router();

statesRouter.get('/', ensureAuthenticated, async (request, response) => {

    const statesRepository = getRepository(State);

    const states = await statesRepository.find();

    return response.json(states);

});

statesRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const statesRepository = getRepository(State);

    const states = await statesRepository.findOne(id);

    return response.json(states);

});

statesRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           name,
           uf
         } = request.body;

        const createState = new CreateStateService();

        const state = await createState.execute({ 
            name,
            uf
        });

        return response.json(state);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

statesRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            name,
            uf
         } = request.body;

        const updateState = new UpdateStateService();

        const state = await updateState.execute({ 
            id,  
            name,
            uf
        });

        return response.json(state);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

statesRouter.delete('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const statesRepository = getRepository(State);

    const state = await statesRepository.delete(id);

    return response.json();

});

export default statesRouter;