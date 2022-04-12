import { getRepository } from 'typeorm';

import Tension from '../models/Tension';

interface Request {
    css_id: string;
    tension: string;
}

class CreateTensionService {

    public async execute({  css_id, tension }: Request): Promise<Tension> {
        const tensionsRepository = getRepository(Tension);

        const tensionOb = tensionsRepository.create({
            css_id,
            tension
        });

        await tensionsRepository.save(tensionOb);

        return tensionOb;
    }

}

export default CreateTensionService;