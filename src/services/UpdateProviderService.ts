import { getRepository } from 'typeorm';

import Provider from '../models/Provider';

interface Request {
    id: string;
    name: string;
}

class UpdateProviderService {

    public async execute({ id, name }: Request): Promise<Provider> {
        const providersRepository = getRepository(Provider);

        const provider = await providersRepository.findOne(id);

        provider.name = name;

        await providersRepository.save(provider);

        return provider;
    }

}

export default UpdateProviderService;