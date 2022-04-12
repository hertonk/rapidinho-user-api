import { getRepository } from 'typeorm';

import State from '../models/State';

interface Request {
    name: string;
    uf: string;
}

class CreateStateService {

    public async execute({ name, uf }: Request): Promise<State> {
        const statesRepository = getRepository(State);

        const state = statesRepository.create({
            name,
            uf
        });

        await statesRepository.save(state);

        return state;
    }

}

export default CreateStateService;