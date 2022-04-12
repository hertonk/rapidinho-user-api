import { getRepository } from 'typeorm';

import Inverter from '../models/Inverter';

interface Request {
    id: string;
    project_id: string;
    manufacturer: string;
    model: string;
    power: string;
    qtd: string;
}

class UpdateInverterService {

    public async execute({
        id, 
        project_id,
        manufacturer,
        model,
        power,
        qtd,
     }: Request): Promise<Inverter> {
        const invertersRepository = getRepository(Inverter);

        const inverter = invertersRepository.findOne(id);

        inverter.manufacturer = manufacturer;
        inverter.model = model;
        inverter.power = power;
        inverter.qtd = qtd;

        await invertersRepository.save(inverter);

        return inverter;
    }

}

export default UpdateInverterService;