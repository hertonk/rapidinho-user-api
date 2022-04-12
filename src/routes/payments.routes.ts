import { Router } from "express";
import { getRepository } from 'typeorm';
import Payment from "../models/Payment";

import UpdatePaymentService from "../services/UpdatePaymentService";
import CreatePaymentService from "../services/CreatePaymentService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const paymentsRouter = Router();

paymentsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const paymentsRepository = getRepository(Payment);

    const payments = await paymentsRepository.find();

    return response.json(payments);

});

paymentsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const paymentsRepository = getRepository(Payment);

    const payment = await paymentsRepository.findOne(id);

    return response.json(payment);

});

paymentsRouter.get('/project/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const paymentsRepository = getRepository(Payment);

    const payments = await paymentsRepository.find({
        where: {
            project_id: id
        }
    });

    return response.json(payments);

});

paymentsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            project_id,
            type,
            venc,
            payment,
            desc,
            value,
            status
         } = request.body;

        const createPayment = new CreatePaymentService();

        const paymentOb = await createPayment.execute({ 
            project_id,
            type,
            venc,
            payment,
            desc,
            value,
            status
        });

        return response.json(paymentOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

paymentsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            project_id,
            type,
            venc,
            payment,
            desc,
            value,
            status
         } = request.body;

        const updatePayment = new UpdatePaymentService();

        const paymentOb = await updatePayment.execute({ 
            id,  
            project_id,
            type,
            venc,
            desc,
            value,
            status
        });

        return response.json(paymentOb);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default paymentsRouter;