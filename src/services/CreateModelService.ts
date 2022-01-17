import { getRepository } from 'typeorm';

import Model from "../models/Model";

interface Request{
    name: string;
    brand: string;
    obs: string;
    photo: string;
}

class CreateModelService {

    public async execute({ name, brand, obs, photo }: Request): Promise<Model>{
        const modelsRepository = getRepository(Model);

        const model = modelsRepository.create({
            name,
            brand,
            obs,
            photo,
        });

        await modelsRepository.save(model);

        return model;
    }
}

export default CreateModelService;