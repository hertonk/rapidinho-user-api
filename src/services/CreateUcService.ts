import { getRepository } from 'typeorm';

import Uc from '../models/Uc';

interface Request{
    project_id: string;
    uc: string;
    percentage: string;
    address: string;
}

class CreateUcService {

    public async execute({ 
        project_id,
        uc,
        percentage,
        address
    }: Request): Promise<Uc>{
       
        const ucsRepository = getRepository(Uc);

        const ucOb = await ucsRepository.create({
            project_id,
            uc,
            percentage,
            address
        });

        await ucsRepository.save(ucOb);

        return ucOb;
    }

}

export default CreateUcService;