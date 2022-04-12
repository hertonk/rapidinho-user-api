import { Router } from "express";
import { getRepository } from 'typeorm';
import Inverter from "../models/Inverter";

import UpdateInverterService from "../services/UpdateInverterService";
import CreateInverterService from "../services/CreateInverterService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const invertersRouter = Router();

invertersRouter.get('/', ensureAuthenticated, async (request, response) => {

    const invertersRepository = getRepository(Inverter);

    const inverters = await invertersRepository.find();

    return response.json(inverters);

});

invertersRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const invertersRepository = getRepository(Inverter);

    const inverter = await invertersRepository.findOne(id);

    return response.json(inverter);

});

invertersRouter.get('/project/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const invertersRepository = getRepository(Inverter);

    const inverters = await invertersRepository.find({
        where: {
            project_id: id
        }
    });

    return response.json(inverters);

});

invertersRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            project_id,
            manufacturer,
            model,
            power,
            qtd,
         } = request.body;

        const createInverter = new CreateInverterService();

        const inverter = await createInverter.execute({ 
            project_id,
            manufacturer,
            model,
            power,
            qtd,
        });

        return response.json(inverter);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

invertersRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            project_id,
            manufacturer,
            model,
            power,
            qtd,
         } = request.body;

        const updateInverter = new UpdateInverterService();

        const inverter = await updateInverter.execute({ 
            id,  
            project_id,
            manufacturer,
            model,
            power,
            qtd,
        });

        return response.json(inverter);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default invertersRouter;