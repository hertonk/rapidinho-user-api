import { getRepository } from 'typeorm';

import Client from '../models/Client';

interface Request {
    id: string;
    name: string;
    email: string;
}

class UpdateClientService {

    public async execute({ id, name, email }: Request): Promise<Client> {
        const clientsRepository = getRepository(Client);

        const client = await clientsRepository.findOne(id);

        client.name = name;
        client.email = email;
        
        await clientsRepository.save(client);

        return client;
    }

}

export default UpdateClientService;