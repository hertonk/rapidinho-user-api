import { Router } from "express";
import { getRepository } from 'typeorm';
import Client from "../models/Client";

import UpdateClientService from "../services/UpdateClientService";
import CreateClientService from "../services/CreateClientService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const clientsRouter = Router();

clientsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const clientsRepository = getRepository(Client);

    const clients = await clientsRepository.find();

    return response.json(clients);

});

clientsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const clientsRepository = getRepository(Client);

    const clients = await clientsRepository.findOne(id);

    return response.json(clients);

});

clientsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           name,
           email
         } = request.body;

        const createClient = new CreateClientService();

        const client = await createClient.execute({ 
            name,
            email
        });

        return response.json(client);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

clientsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            name,
            email
         } = request.body;

        const updateClient = new UpdateClientService();

        const client = await updateClient.execute({ 
            id,  
            name,
            email
        });

        return response.json(client);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default clientsRouter;