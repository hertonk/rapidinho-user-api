import { getRepository } from 'typeorm';

import Company from "../models/Company";

interface Request{
    manager_id: string;
    name: string;
    description: string;
    logo: string;
}

class CreateCompanyService {

    public async execute({
        manager_id,
        name,
        description,
        logo
     }: Request): Promise<Company>{
        const companiesRepository = getRepository(Company);

        const company = companiesRepository.create({
            manager_id,
            name,
            description,
            logo
        });

        await companiesRepository.save(company);

        return company;
    }
}

export default CreateCompanyService;