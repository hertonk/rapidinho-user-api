import { getRepository } from 'typeorm';

import Brand from '../models/Brand';

import AppError from '../errors/AppError';

interface Request {
    id: string;
    name: string; 
}

class UpdateBrandService {

    public async execute({ id, name }: Request): Promise<Brand> {
        const brandsRepository = getRepository(Brand);

        const brand = await brandsRepository.findOne(id);

        // if(!model){
        //     throw new AppError('Only authenticated users can change avatar.', 401);
        // }

        brand?.name = name;

        await brandsRepository.save(brand);

        return brand;
    }

}

export default UpdateBrandService;