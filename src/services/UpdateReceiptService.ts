import { getRepository } from 'typeorm';

import Receipt from '../models/Receipt';

interface Request {
    id: string;
    project_id: string;
    type: string;
    venc: string;
    desc: string;
    value: string;
    status: string;
}

class UpdateReceiptService {

    public async execute({ 
        id,
        project_id,
        type,
        venc,
        desc,
        value,
        status
    }: Request): Promise<Receipt> {
        const receiptsRepository = getRepository(Receipt);

        const receipt = await receiptsRepository.findOne(id);

        receipt.type = type;
        receipt.venc = venc;
        receipt.desc = desc;
        receipt.value = value;
        receipt.status = status;

        await receiptsRepository.save(receipt);

        return receipt;
    }

}

export default UpdateReceiptService;