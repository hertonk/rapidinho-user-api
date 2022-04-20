import { getRepository } from 'typeorm';

import TensionCss from "../models/TensionsCss";

interface Request {
    id: string;
    css_id: string;
    tension_id: string;
}

class UpdateTensionCssService {

    public async execute({  id, css_id, tension_id }: Request): Promise<TensionCss> {
        const tensionsRepository = getRepository(TensionCss);

        const tensionOb = await tensionsRepository.findOne(id);
        
        tensionOb.css_id = css_id;
        tensionOb.tension_id = tension_id;

        await tensionsRepository.save(tensionOb);

        return tensionOb;
    }

}

export default UpdateTensionCssService;