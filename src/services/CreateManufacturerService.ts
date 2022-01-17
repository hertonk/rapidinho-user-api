import { getRepository } from 'typeorm';

import Manufacturer from "../models/Manufacturer";

interface Request{
    name: string;
}

class CreateManufacturerService {

    public async execute({ name }: Request): Promise<Manufacturer>{
        const manufacturersRepository = getRepository(Manufacturer);

        const manufacturer = manufacturersRepository.create({
           name
        });

        await manufacturersRepository.save(manufacturer);

        return manufacturer;
    }
}

export default CreateManufacturerService;