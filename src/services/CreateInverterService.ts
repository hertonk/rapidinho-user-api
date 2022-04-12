import { getRepository } from 'typeorm';

import Inverter from '../models/Inverter';

interface Request {
    project_id: string;
    manufacturer: string;
    model: string;
    power: string;
    qtd: string;
}

class CreateInverterService {

    public async execute({ 
        project_id,
        manufacturer,
        model,
        power,
        qtd,
     }: Request): Promise<Inverter> {
        const invertersRepository = getRepository(Inverter);

        const inverter = invertersRepository.create({
            project_id,
            manufacturer,
            model,
            power,
            qtd,
        });

        await invertersRepository.save(inverter);

        return inverter;
    }

}

export default CreateInverterService;