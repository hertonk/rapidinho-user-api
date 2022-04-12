import { getRepository } from 'typeorm';

import State from '../models/State';

interface Request {
    id: string;
    name: string;
    uf: string;
}

class UpdateStateService {

    public async execute({ id, name, uf }: Request): Promise<State> {
        const statesRepository = getRepository(State);

        const state = await statesRepository.findOne(id);

        state.name = name;
        state.uf = uf;

        await statesRepository.save(state);

        return state;
    }

}

export default UpdateStateService;