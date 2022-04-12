import { getRepository } from 'typeorm';

import Payment from '../models/Payment';

interface Request {
    id: string;
    project_id: string;
    type: string;
    venc: string;
    payment: string;
    desc: string;
    value: string;
    status: string;
}

class UpdatePaymentService {

    public async execute({ 
        id,
        project_id,
        type,
        venc,
        payment,
        desc,
        value,
        status
    }: Request): Promise<Payment> {
        const paymentsRepository = getRepository(Payment);

        const paymentOb = await paymentsRepository.findOne(id);
            
        paymentOb.type = type;
        paymentOb.venc = venc;
        paymentOb.payment = payment;
        paymentOb.desc = desc;
        paymentOb.value = value;
        paymentOb.status = status;
      

        await paymentsRepository.save(paymentOb);

        return paymentOb;
    }

}

export default UpdatePaymentService;