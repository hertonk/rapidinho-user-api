import { getRepository } from 'typeorm';

import Css from '../models/Css';

interface Request {
    id: string;
    state_id: string;
    name: string;
}

class UpdateCssService {

    public async execute({ id, state_id, name }: Request): Promise<Css> {
        const cssRepository = getRepository(Css);

        const css = await cssRepository.findOne(id);

        css.name = name;

        await cssRepository.save(css);

        return css;
    }

}

export default UpdateCssService;