import { getRepository } from 'typeorm';

import Budget from '../models/Budget';

interface Request {
    min: string;
    max: string;
    budget_base: string;
    inverter: string;
    module: string;
    module_qtd: string;
    materials: string;
    gift: string;
    installation: string;
    standard: string;
    freight: string;
    total_coast: string;
    margin: string;
    nf: string;
    fiscal_coast: string;
    commission: string;
    real_margin: string;
    full_price: string;
    discount_percentage: string;
    discount_real: string;
    price_discount: string;
    status: string;
}

class CreateBudgetService {

    public async execute({ 
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
     }: Request): Promise<Budget> {
        const budgetsRepository = getRepository(Budget);

        const budget = budgetsRepository.create({
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

        await budgetsRepository.save(budget);

        return budget;
    }

}

export default CreateBudgetService;