import { Router } from "express";
import { getRepository } from 'typeorm';

import Manufacturer from "../models/Manufacturer";

import CreateManufacturerService from "../services/CreateManufacturerService";
import UpdateManufacturerService from "../services/UpdateManufacturerService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const manufacturersRouter = Router();

manufacturersRouter.use(ensureAuthenticated);
manufacturersRouter.get('/', async (request, response) => {
    
    const manufacturersRepository = getRepository(Manufacturer);
    const manufacturers = await manufacturersRepository.find();

    return response.json(manufacturers);
});

manufacturersRouter.post('/',  async (request, response) => {

    try{
        const { name } = request.body;

        const createManufacturer = new CreateManufacturerService();

        const manufacturer = await createManufacturer.execute({
            name, 
        });
        
        return response.json(manufacturer);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

manufacturersRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const manufacturersRepository = getRepository(Manufacturer);
    const manufacturer = await manufacturersRepository.findOne(id);

    return response.json(manufacturer);
});

manufacturersRouter.patch('/:id',  async (request, response) => {

    try{
        const { id } = request.params;

        const { name } = request.body;

        const updateManufacturer = new UpdateManufacturerService();

        const manufacturer = await updateManufacturer.execute({
            id,
            name, 
        });
        
        return response.json(manufacturer);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

export default manufacturersRouter;