import { getRepository } from 'typeorm';

import Client from '../models/Client';

interface Request {
    name: string;
    email: string;
}

class CreateClientService {

    public async execute({ name, email }: Request): Promise<Client> {
        const clientsRepository = getRepository(Client);

        const client = clientsRepository.create({
            name,
            email
        });

        await clientsRepository.save(client);

        return client;
    }

}

export default CreateClientService;