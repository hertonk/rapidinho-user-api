import { Router } from "express";
import { getRepository } from 'typeorm';

import Client from "../models/Client";

import CreateClientService from "../services/CreateClientService";
import UpdateClientService from "../services/UpdateClientService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const clientsRouter = Router();

clientsRouter.use(ensureAuthenticated);
clientsRouter.get('/', async (request, response) => {
    
    const clientsRepository = getRepository(Client);
    const clients = await clientsRepository.find();

    return response.json(clients);
});

clientsRouter.post('/',  async (request, response) => {

    try{
        const { 
            name, 
            nick, 
            email, 
            telephone, 
            birthday, 
            cpf, 
            gender, 
            obs, 
            instagram, 
            street, 
            number, 
            neighborhood, 
            complement, 
            city, 
            state,
            brand, 
            model  
        } = request.body;

        const createClient = new CreateClientService();

        const client = await createClient.execute({
            name, 
            nick, 
            email, 
            telephone, 
            birthday, 
            cpf, 
            gender, 
            obs, 
            instagram, 
            street, 
            number, 
            neighborhood, 
            complement, 
            city, 
            state,
            brand, 
            model  
        });
        
        return response.json(client);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

clientsRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const clientsRepository = getRepository(Client);
    const client = await clientsRepository.findOne(id);

    return response.json(client);
});

clientsRouter.patch('/:id',  async (request, response) => {

    try{

        const { id } = request.params;

        const { 
            name, 
            nick, 
            email, 
            telephone, 
            birthday, 
            gender, 
            obs, 
            instagram, 
            street, 
            number, 
            neighborhood, 
            complement, 
            city, 
            state,
            brand, 
            model  
        } = request.body;

        const updateClient = new UpdateClientService();

        const client = await updateClient.execute({
            id,
            name, 
            nick, 
            email, 
            telephone, 
            birthday, 
            gender, 
            obs, 
            instagram, 
            street, 
            number, 
            neighborhood, 
            complement, 
            city, 
            state,
            brand, 
            model  
        });
        
        return response.json(client);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

export default clientsRouter;