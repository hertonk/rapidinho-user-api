import { Router } from "express";
import { getRepository } from 'typeorm';
import Receipt from "../models/Receipt";

import UpdateReceiptService from "../services/UpdateReceiptService";
import CreateReceiptService from "../services/CreateReceiptService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const receiptsRouter = Router();

receiptsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const receiptsRepository = getRepository(Receipt);

    const receipts = await receiptsRepository.find();

    return response.json(receipts);

});

receiptsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const receiptsRepository = getRepository(Receipt);

    const receipt = await receiptsRepository.findOne(id);

    return response.json(receipt);

});

receiptsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            project_id,
            type,
            venc,
            desc,
            value,
            status
         } = request.body;

        const createReceipt = new CreateReceiptService();

        const receipt = await createReceipt.execute({ 
            project_id,
            type,
            venc,
            desc,
            value,
            status
        });

        return response.json(receipt);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

receiptsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            project_id,
            type,
            venc,
            desc,
            value,
            status
         } = request.body;

        const updateReceipt = new UpdateReceiptService();

        const receipt = await updateReceipt.execute({ 
            id,  
            project_id,
            type,
            venc,
            desc,
            value,
            status
        });

        return response.json(receipt);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default receiptsRouter;