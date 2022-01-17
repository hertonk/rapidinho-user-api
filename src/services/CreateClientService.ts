import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Client from "../models/Client";

interface Request{
    name: string;
    nick: string;
    email: string;
    telephone: string;
    birthday: Date;
    cpf: string;
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

class CreateClientService {

    public async execute({ 
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
    }: Request): Promise<Client>{
            
        const clientsRepository = getRepository(Client);

        const checkClientExists = await clientsRepository.findOne({
            where: { cpf },
        });

        if(checkClientExists){
            throw new AppError('CPF already used.');
        }

        const client = clientsRepository.create({
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

        await clientsRepository.save(client);

        return client;
    }
}

export default CreateClientService;