import { getRepository } from 'typeorm';

import Uc from '../models/Uc';

interface Request{
    id: string;
    project_id: string;
    uc: string;
    percentage: string;
    address: string;
}

class UpdateUcService {

    public async execute({ 
        id,
        project_id,
        uc,
        percentage,
        address
    }: Request): Promise<Uc>{
       
        const ucsRepository = getRepository(Uc);

        const ucOb = await ucsRepository.findOne(id);

        ucOb.project_id = project_id;
        ucOb.uc = uc;
        ucOb.percentage = percentage;
        ucOb.address = address;

        await ucsRepository.save(ucOb);

        return ucOb;
    }

}

export default UpdateUcService;