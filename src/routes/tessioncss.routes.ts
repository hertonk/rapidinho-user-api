import { Router } from "express";
import { getRepository } from 'typeorm';
import TensionCss from "../models/TensionsCss";

import UpdateTensionCssService from "../services/UpdateTensionCssService";
import CreateTensionCssService from "../services/CreateTensionCssService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const tensionsCssRouter = Router();

tensionsCssRouter.get('/', ensureAuthenticated, async (request, response) => {

    const tensionsRepository = getRepository(TensionCss);

    const tension = await tensionsRepository.find();

    return response.json(tension);

});

tensionsCssRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const tenionsRepository = getRepository(TensionCss);

    const tension = await tenionsRepository.findOne(id);

    return response.json(tension);

});

tensionsCssRouter.get('/css/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const tenionsRepository = getRepository(TensionCss);

    const tension = await tenionsRepository.find({
        where: {
            css_id: id
        }
    });

    return response.json(tension);

});

tensionsCssRouter.get('/tension/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const tenionsRepository = getRepository(TensionCss);

    const tension = await tenionsRepository.find({
        where: {
            tension_id: id
        }
    });

    return response.json(tension);

});


tensionsCssRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           css_id,
           tension_id
         } = request.body;

        const createTension = new CreateTensionCssService();

        const tensionOb = await createTension.execute({ 
            css_id,
            tension_id
        });

        return response.json(tensionOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

tensionsCssRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            css_id,
            tension_id
         } = request.body;

        const updateTension = new UpdateTensionCssService();

        const tensionOb = await updateTension.execute({ 
            id,  
            css_id,
            tension_id
        });

        return response.json(tensionOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default tensionsCssRouter;