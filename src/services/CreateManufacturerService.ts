import { getRepository } from 'typeorm';

import Manufacturer from '../models/Manufacturer';
import AppError from '../errors/AppError';

interface Request{
    name: string;
    description: string;
}

class CreateManufacturerService {

    public async execute({ name, description }: Request): Promise<Manufacturer>{
       
        const manufacturesRepository = getRepository(Manufacturer);

        const checkManufacturerExists = await manufacturesRepository.findOne({
            where: { name },
        });

        if(checkManufacturerExists){
            throw new AppError('Manufacturer name already used.');
        }

        const manufacturer = manufacturesRepository.create({
            name,
            description
        });

        await manufacturesRepository.save(manufacturer);

        return manufacturer;
    }

}

export default CreateManufacturerService;