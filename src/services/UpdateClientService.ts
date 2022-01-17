import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Client from "../models/Client";

interface Request{
    id: string;
    name: string;
    nick: string;
    email: string;
    telephone: string;
    birthday: Date;
    gender: string;
    obs: string;
    instagram: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    city: string;
    state: string;
    brand: string;
    model: string;
}

class UpdateClientService {

    public async execute({ 
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
    }: Request): Promise<Client>{
            
        const clientsRepository = getRepository(Client);

        const client = await clientsRepository.findOne(id);

        client.name = name; 
        client.nick = nick; 
        client.email = email; 
        client.telephone = telephone; 
        client.birthday = birthday; 
        client.gender = gender; 
        client.obs = obs; 
        client.instagram = instagram; 
        client.street = street; 
        client.number = number;
        client.neighborhood = neighborhood; 
        client.complement = complement;
        client.city = city;
        client.state = state;
        client.brand = brand;
        client.model = model;

        await clientsRepository.save(client);

        return client;
    }
}

export default UpdateClientService;