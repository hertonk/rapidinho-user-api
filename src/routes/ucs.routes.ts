import { Router } from "express";
import { getRepository } from 'typeorm';
import Uc from "../models/Uc";

import UpdateUcService from "../services/UpdateUcService";
import CreateUcService from "../services/CreateUcService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const ucsRouter = Router();

ucsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const ucsRepository = getRepository(Uc);

    const ucs = await ucsRepository.find();

    return response.json(ucs);

});

ucsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const ucsRepository = getRepository(Uc);

    const uc = await ucsRepository.findOne(id);

    return response.json(uc);

});

ucsRouter.get('/project/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const ucsRepository = getRepository(Uc);

    const ucs = await ucsRepository.find({
        where: {
            project_id: id
        }
    });

    return response.json(ucs);

});

ucsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            project_id,
            uc,
            percentage,
            address
         } = request.body;

        const createUc = new CreateUcService();

        const ucOb = await createUc.execute({ 
            project_id,
            uc,
            percentage,
            address
        });

        return response.json(ucOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

ucsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            project_id,
            uc,
            percentage,
            address
         } = request.body;

        const updateUc = new UpdateUcService();

        const ucOb = await updateUc.execute({ 
            id,  
            project_id,
            uc,
            percentage,
            address
        });

        return response.json(ucOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default ucsRouter;