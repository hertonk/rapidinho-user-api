import { getRepository } from 'typeorm';

import Provider from '../models/Provider';

interface Request {
    name: string;
}

class CreateProviderService {

    public async execute({ name }: Request): Promise<Provider> {
        const providersRepository = getRepository(Provider);

        const provider = providersRepository.create({
           name
        });

        await providersRepository.save(provider);

        return provider;
    }

}

export default CreateProviderService;