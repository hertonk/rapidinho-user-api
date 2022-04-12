import { Router } from "express";
import { getRepository } from 'typeorm';
import BudgetProvider from "../models/BudgetProvider";

import UpdateBudgetProviderService from "../services/UpdateBudgetProviderService";
import CreateBudgetProviderService from "../services/CreateBudgetProviderService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const budgetsProvidersRouter = Router();

budgetsProvidersRouter.get('/', ensureAuthenticated, async (request, response) => {

    const budgetsRepository = getRepository(BudgetProvider);

    const budgets = await budgetsRepository.find();

    return response.json(budgets);

});

budgetsProvidersRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const budgetsRepository = getRepository(BudgetProvider);

    const budget = await budgetsRepository.findOne(id);

    return response.json(budget);

});


budgetsProvidersRouter.get('/provider/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const budgetsRepository = getRepository(BudgetProvider);

    const budgets = await budgetsRepository.find({
        where: { provider_id: id }
    });

    return response.json(budgets);

});

budgetsProvidersRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            provider_id,
            min,
            max,
            material_list,
            value
         } = request.body;

        const createBudget = new CreateBudgetProviderService();

        const budget = await createBudget.execute({ 
            provider_id,
            min,
            max,
            material_list,
            value
        });

        return response.json(budget);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

budgetsProvidersRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            provider_id,
            min,
            max,
            material_list,
            value
         } = request.body;

        const updateBudget = new UpdateBudgetProviderService();

        const budget = await updateBudget.execute({ 
            id,
            provider_id,
            min,
            max,
            material_list,
            value
        });

        return response.json(budget);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default budgetsProvidersRouter;