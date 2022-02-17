import { Router } from "express";
import { getRepository } from 'typeorm';

import Company from "../models/Company";

import CreateCompanyService from "../services/CreateCompanyService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const companiesRouter = Router();

companiesRouter.use(ensureAuthenticated);
companiesRouter.get('/', async (request, response) => {
    
    const companiesRepository = getRepository(Company);
    const companies = await companiesRepository.find();

    return response.json(companies);
});

companiesRouter.post('/',  async (request, response) => {

    try{
        const { 
            manager_id,
            name,
            description,
            logo
         } = request.body;

        const createCompany = new CreateCompanyService();

        const company = await createCompany.execute({
            manager_id,
            name,
            description,
            logo
        });
        
        return response.json(company);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

companiesRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const companiesRepository = getRepository(Company);
    const company = await companiesRepository.findOne(id);

    return response.json(company);
});

export default companiesRouter;