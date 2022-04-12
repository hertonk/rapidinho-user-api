import { getRepository } from 'typeorm';

import BudgetProvider from '../models/BudgetProvider';

interface Request {
    id: string;
    provider_id: string;
    min: string;
    max: string;
    material_list: string;
    value: number;
}

class UpdateBudgetProviderService {

    public async execute({ 
        id,
        provider_id,
        min,
        max,
        material_list,
        value
     }: Request): Promise<BudgetProvider> {
        const budgetsProvidersRepository = getRepository(BudgetProvider);

        const budget = await budgetsProvidersRepository.findOne(id);
       
        budget.min = min;
        budget.max = max; 
        budget.material_list = material_list;
        budget.value = value;

        await budgetsProvidersRepository.save(budget);

        return budget;
    }

}

export default UpdateBudgetProviderService;