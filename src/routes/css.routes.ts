import { Router } from "express";
import { getRepository } from 'typeorm';
import Css from "../models/Css";

import UpdateCssService from "../services/UpdateCssService";
import CreateCssService from "../services/CreateCssService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const cssRouter = Router();

cssRouter.get('/', ensureAuthenticated, async (request, response) => {

    const cssRepository = getRepository(Css);

    const css = await cssRepository.find();

    return response.json(css);

});

cssRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const cssRepository = getRepository(Css);

    const css = await cssRepository.findOne(id);

    return response.json(css);

});

cssRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           state_id,
           name
         } = request.body;

        const createCss = new CreateCssService();

        const css = await createCss.execute({ 
            state_id,
            name
        });

        return response.json(css);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

cssRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            state_id,
            name
         } = request.body;

        const updateCss = new UpdateCssService();

        const css = await updateCss.execute({ 
            id,  
            state_id,
            name
        });

        return response.json(css);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

cssRouter.delete('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const cssRepository = getRepository(Css);

    const css = await cssRepository.delete(id);

    return response.json();

});

export default cssRouter;