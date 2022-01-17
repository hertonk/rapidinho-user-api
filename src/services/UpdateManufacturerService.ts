import { getRepository } from 'typeorm';

import Manufacturer from '../models/Manufacturer';

interface Request {
    id: string;
    name: string; 
}

class UpdateManufacturerService {

    public async execute({ id, name }: Request): Promise<Manufacturer> {
        const manufacturersRepository = getRepository(Manufacturer);

        const manufacturer = await manufacturersRepository.findOne(id);

        manufacturer?.name = name;

        await manufacturersRepository.save(manufacturer);

        return manufacturer;
    }

}

export default UpdateManufacturerService;