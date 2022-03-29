import { getRepository } from 'typeorm';

import Manufacturer from '../models/Manufacturer';

import AppError from '../errors/AppError';

interface Request {
    id: string;
    name: string;
    description: string;
}

class UpdateManufacturerService {

    public async execute({ id, name, description }: Request): Promise<Manufacturer> {
        const manufacturesRepository = getRepository(Manufacturer);

        const manufacturer = await manufacturesRepository.findOne(id);

        if(!manufacturer){
            throw new AppError('Manufacturer dont existis.', 401);
        }

        manufacturer.name = name;
        manufacturer.description = description;

        await manufacturesRepository.save(manufacturer);

        return manufacturer;
    }

}

export default UpdateManufacturerService;