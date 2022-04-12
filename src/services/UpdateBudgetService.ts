import { getRepository } from 'typeorm';

import Budget from '../models/Budget';

interface Request {
    id: string;
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

class UpdateBudgetService {

    public async execute({ 
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
     }: Request): Promise<Budget> {
        const budgetsRepository = getRepository(Budget);

        const budget = await budgetsRepository.findOne(id);

        budget.min = min;
        budget.max = max;
        budget.inverter = inverter;
        budget.module = module;
        budget.module_qtd = module_qtd;
        budget.materials = materials;
        budget.gift = gift;
        budget.installation = installation;
        budget.standard = standard;
        budget.freight = freight;
        budget.total_coast = total_coast;
        budget.margin = margin;
        budget.nf = nf;
        budget.fiscal_coast = fiscal_coast;
        budget.commission = commission;
        budget.real_margin = real_margin;
        budget.full_price = full_price;
        budget.discount_percentage = discount_percentage
        budget.discount_real = discount_real;
        budget.price_discount = price_discount;
        budget.status = status;

        await budgetsRepository.save(budget);

        return budget;
    }

}

export default UpdateBudgetService;