import { getRepository } from 'typeorm';

import Switche from '../models/Switche';

interface Request {
    name: string;
}

class CreateSwitcheService {

    public async execute({ name }: Request): Promise<Switche> {
        const switchesRepository = getRepository(Switche);

        const swictche = switchesRepository.create({
            name,
        });

        await switchesRepository.save(swictche);

        return swictche;
    }

}

export default CreateSwitcheService;