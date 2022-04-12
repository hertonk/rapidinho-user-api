import { getRepository } from 'typeorm';

import Cable from '../models/Cable';

interface Request {
    name: string;
}

class CreateCableService {

    public async execute({ name }: Request): Promise<Cable> {
        const cablesRepository = getRepository(Cable);

        const cable = cablesRepository.create({
            name,
        });

        await cablesRepository.save(cable);

        return cable;
    }

}

export default CreateCableService;