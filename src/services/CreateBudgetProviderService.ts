import { getRepository } from 'typeorm';

import BudgetProvider from '../models/BudgetProvider';

interface Request {
    provider_id: string;
    min: string;
    max: string;
    material_list: string;
    value: number;
}

class CreateBudgetProviderService {

    public async execute({
        provider_id,
        min,
        max,
        material_list,
        value
    }: Request): Promise<BudgetProvider> {
        const budgetsProvidersRepository = getRepository(BudgetProvider);

        const budget = await budgetsProvidersRepository.create({
            provider_id,
            min,
            max,
            material_list,
            value
        });

        await budgetsProvidersRepository.save(budget);

        return budget;
    }

}

export default CreateBudgetProviderService;