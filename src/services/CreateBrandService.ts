import { getRepository } from 'typeorm';

import Brand from "../models/Brand";

interface Request{
    name: string;
}

class CreateBrandService {

    public async execute({ name }: Request): Promise<Brand>{
        const brandsRepository = getRepository(Brand);

        const brand = brandsRepository.create({
           name
        });

        await brandsRepository.save(brand);

        return brand;
    }
}

export default CreateBrandService;