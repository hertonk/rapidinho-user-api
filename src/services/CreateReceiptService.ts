import { getRepository } from 'typeorm';

import Receipt from '../models/Receipt';

interface Request {
    project_id: string;
    type: string;
    venc: string;
    desc: string;
    value: string;
    status: string;
}

class CreateReceiptService {

    public async execute({ 
        project_id,
        type,
        venc,
        desc,
        value,
        status
    }: Request): Promise<Receipt> {
        const receiptsRepository = getRepository(Receipt);

        const receipt = receiptsRepository.create({
            project_id,
            type,
            venc,
            desc,
            value,
            status
        });

        await receiptsRepository.save(receipt);

        return receipt;
    }

}

export default CreateReceiptService;