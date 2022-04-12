import { getRepository } from 'typeorm';

import Cable from '../models/Cable';

interface Request {
    id: string;
    name: string;
}

class UpdateCableService {

    public async execute({ id, name }: Request): Promise<Cable> {
        const cablesRepository = getRepository(Cable);

        const cable = await cablesRepository.findOne(id);

        cable.name = name;

        await cablesRepository.save(cable);

        return cable;
    }

}

export default UpdateCableService;