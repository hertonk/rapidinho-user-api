import { getRepository } from 'typeorm';

import Css from '../models/Css';

interface Request {
    state_id: string;
    name: string;
}

class CreateCssService {

    public async execute({ state_id, name }: Request): Promise<Css> {
        const cssRepository = getRepository(Css);

        const css = cssRepository.create({
            state_id,
            name,
        });

        await cssRepository.save(css);

        return css;
    }

}

export default CreateCssService;