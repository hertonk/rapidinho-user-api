import { Router } from "express";
import { getRepository } from 'typeorm';
import PriceUser from "../models/PriceUser";

import UpdatePriceUserService from "../services/UpdatePriceUserService";
import CreatePriceUserService from "../services/CreatePriceUserService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const pricesUsersRouter = Router();

pricesUsersRouter.get('/', ensureAuthenticated, async (request, response) => {

    const pricesRepository = getRepository(PriceUser);

    const prices = await pricesRepository.find();

    return response.json(prices);

});

pricesUsersRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const pricesRepository = getRepository(PriceUser);

    const price = await pricesRepository.findOne(id);

    return response.json(price);

});

pricesUsersRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            user_id,
            min,
            max,
            value,
         } = request.body;

        const createPrice = new CreatePriceUserService();

        const price = await createPrice.execute({ 
            user_id,
            min,
            max,
            value,
        });

        return response.json(price);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

pricesUsersRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,
            user_id,  
            min,
            max,
            value,
         } = request.body;

        const updatePrice = new UpdatePriceUserService();

        const price = await updatePrice.execute({ 
            id,
            user_id,  
            min,
            max,
            value,
        });

        return response.json(price);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default pricesUsersRouter;