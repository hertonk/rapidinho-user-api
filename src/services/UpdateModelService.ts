import { getRepository } from 'typeorm';

import Model from '../models/Model';

import AppError from '../errors/AppError';

interface Request {
    id: string;
    name: string; 
    brand: string;
    obs: string;
    photo: string;
}

class UpdateModelService {

    public async execute({ id, name, brand, obs, photo }: Request): Promise<Model> {
        const modelsRepository = getRepository(Model);

        const model = await modelsRepository.findOne(id);

        // if(!model){
        //     throw new AppError('Only authenticated users can change avatar.', 401);
        // }

        model?.name = name;
        model?.brand = brand;
        model?.obs = obs;
        model?.photo = photo;

        await modelsRepository.save(model);

        return model;
    }

}

export default UpdateModelService;