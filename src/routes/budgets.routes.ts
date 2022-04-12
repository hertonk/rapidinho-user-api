import { Router } from "express";
import { getRepository } from 'typeorm';
import Budget from "../models/Budget";

import UpdateBudgetService from "../services/UpdateBudgetService";
import CreateBudgetService from "../services/CreateBudgetService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const budgetsRouter = Router();

budgetsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const budgetsRepository = getRepository(Budget);

    const budgets = await budgetsRepository.find();

    return response.json(budgets);

});

budgetsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const budgetsRepository = getRepository(Budget);

    const budget = await budgetsRepository.findOne(id);

    return response.json(budget);

});

budgetsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
            min,
            max,
            budget_base,
            inverter,
            module,
            module_qtd,
            materials,
            gift,
            installation,
            standard,
            freight,
            total_coast,
            margin,
            nf,
            fiscal_coast,
            commission,
            real_margin,
            full_price,
            discount_percentage,
            discount_real,
            price_discount,
            status
         } = request.body;

        const createBudget = new CreateBudgetService();

        const budget = await createBudget.execute({ 
            min,
            max,
            budget_base,
            inverter,
            module,
            module_qtd,
            materials,
            gift,
            installation,
            standard,
            freight,
            total_coast,
            margin,
            nf,
            fiscal_coast,
            commission,
            real_margin,
            full_price,
            discount_percentage,
            discount_real,
            price_discount,
            status
        });

        return response.json(budget);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

budgetsRouter.patch('/', ensureAuthenticated, async (request, response) => {

    try{
        const { 
            id,  
            min,
            max,
            budget_base,
            inverter,
            module,
            module_qtd,
            materials,
            gift,
            installation,
            standard,
            freight,
            total_coast,
            margin,
            nf,
            fiscal_coast,
            commission,
            real_margin,
            full_price,
            discount_percentage,
            discount_real,
            price_discount,
            status
         } = request.body;

        const updateBudget = new UpdateBudgetService();

        const budget = await updateBudget.execute({ 
            id,
            min,
            max,
            budget_base,
            inverter,
            module,
            module_qtd,
            materials,
            gift,
            installation,
            standard,
            freight,
            total_coast,
            margin,
            nf,
            fiscal_coast,
            commission,
            real_margin,
            full_price,
            discount_percentage,
            discount_real,
            price_discount,
            status
        });

        return response.json(budget);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default budgetsRouter;