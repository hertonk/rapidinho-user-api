import { Router } from "express";
import { getRepository } from 'typeorm';
import Price from "../models/Price";

import UpdatePriceService from "../services/UpdatePriceService";
import CreatePriceService from "../services/CreatePriceService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const pricesRouter = Router();

pricesRouter.get('/', ensureAuthenticated, async (request, response) => {

    const pricesRepository = getRepository(Price);

    const prices = await pricesRepository.find();

    return response.json(prices);

});

pricesRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const pricesRepository = getRepository(Price);

    const price = await pricesRepository.findOne(id);

    return response.json(price);

});

pricesRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            min,
            max,
            value,
         } = request.body;

        const createPrice = new CreatePriceService();

        const price = await createPrice.execute({ 
            min,
            max,
            value,
        });

        return response.json(price);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

pricesRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            min,
            max,
            value,
         } = request.body;

        const updatePrice = new UpdatePriceService();

        const price = await updatePrice.execute({ 
            id,  
            min,
            max,
            value,
        });

        return response.json(price);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default pricesRouter;