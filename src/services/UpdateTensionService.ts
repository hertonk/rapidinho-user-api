import { getRepository } from 'typeorm';

import Tension from '../models/Tension';

interface Request {
    id: string;
    css_id: string;
    tension: string;
}

class UpdateTensionService {

    public async execute({  id, css_id, tension }: Request): Promise<Tension> {
        const tensionsRepository = getRepository(Tension);

        const tensionOb = await tensionsRepository.findOne(id);
 
        tensionOb.tension = tension;

        await tensionsRepository.save(tensionOb);

        return tensionOb;
    }

}

export default UpdateTensionService;