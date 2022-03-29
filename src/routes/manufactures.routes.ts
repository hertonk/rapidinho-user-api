import { Router } from "express";
import { getRepository } from 'typeorm';
import Manufacturer from "../models/Manufacturer";

import CreateManufacturerService from "../services/CreateManufacturerService";
import UpdateManufacturerService from "../services/UpdateManufacturerService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const manufacturesRouter = Router();

manufacturesRouter.get('/', ensureAuthenticated, async (request, response) => {

    const manufacturesRepository = getRepository(Manufacturer);

    const manufactures = await manufacturesRepository.find();

    return response.json(manufactures);

});

manufacturesRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const manufacturesRepository = getRepository(Manufacturer);

    const manufacturer = await manufacturesRepository.findOne(id);

    return response.json(manufacturer);

});

manufacturesRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const { name, description } = request.body;

        const createManufacturer = new CreateManufacturerService();

        const manufacturer = await createManufacturer.execute({ 
            name,
            description
        });

        return response.json(manufacturer);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

manufacturesRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { id, name, description } = request.body;

        const updateManufacturer = new UpdateManufacturerService();

        const manufacturer = await updateManufacturer.execute({ 
            id,
            name,
            description
        });

        return response.json(manufacturer);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default manufacturesRouter;