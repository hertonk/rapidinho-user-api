import { getRepository } from 'typeorm';

import Payment from '../models/Payment';

interface Request {
    project_id: string;
    type: string;
    venc: string;
    payment: string;
    desc: string;
    value: string;
    status: string;
}

class CreatePaymentService {

    public async execute({ 
        project_id,
        type,
        venc,
        payment,
        desc,
        value,
        status
    }: Request): Promise<Payment> {
        const paymentsRepository = getRepository(Payment);

        const paymentOb = paymentsRepository.create({
            project_id,
            type,
            venc,
            payment,
            desc,
            value,
            status
        });

        await paymentsRepository.save(paymentOb);

        return paymentOb;
    }

}

export default CreatePaymentService;