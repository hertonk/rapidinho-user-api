import { getRepository } from 'typeorm';

import TensionCss from '../models/TensionsCss';

interface Request {
    css_id: string;
    tension_id: string;
}

class CreateTensionCssService {

    public async execute({  css_id, tension_id }: Request): Promise<TensionCss> {
        const tensionsRepository = getRepository(TensionCss);

        const tensionOb = tensionsRepository.create({
            css_id,
            tension_id
        });

        await tensionsRepository.save(tensionOb);

        return tensionOb;
    }

}

export default CreateTensionCssService;