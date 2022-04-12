import { getRepository } from 'typeorm';

import Switche from '../models/Switche';

interface Request {
    id: string;
    name: string;
}

class UpdateSwitchService {

    public async execute({ id, name }: Request): Promise<Switche> {
        const switchesRepository = getRepository(Switche);

        const switche = await switchesRepository.findOne(id);

        switche.name = name;

        await switchesRepository.save(switche);

        return switche;
    }

}

export default UpdateSwitchService;