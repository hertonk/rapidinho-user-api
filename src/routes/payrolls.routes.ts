import { Router } from "express";
import { getRepository } from 'typeorm';

import Payroll from "../models/Payroll";

import CreatePayrollService from "../services/CreatePayrollService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const payrollsRouter = Router();

payrollsRouter.use(ensureAuthenticated);
payrollsRouter.get('/', async (request, response) => {
    
    const payrollsRepository = getRepository(Payroll);
    const payrolls = await payrollsRepository.find();

    return response.json(payrolls);
});

payrollsRouter.post('/',  async (request, response) => {

    try{
        const { 
            company_id,
            employee_id,
            company_code,
            employee_code,
            employee_name,
            company_name,
            company_reg,
            role,
            cost_center,
            company_department,
            company_branch,
            admission_date,
            rubrik_name,
            rubrik_code,
            reference,
            event_value,
            event_type,
            salary,
            base_inss,
            base_irrf,
            base_fgts,
            month_fgts,
            level_irrf,
         } = request.body;

        const createPayroll = new CreatePayrollService();

        const payroll = await createPayroll.execute({
            company_id,
            employee_id,
            company_code,
            employee_code,
            employee_name,
            company_name,
            company_reg,
            role,
            cost_center,
            company_department,
            company_branch,
            admission_date,
            rubrik_name,
            rubrik_code,
            reference,
            event_value,
            event_type,
            salary,
            base_inss,
            base_irrf,
            base_fgts,
            month_fgts,
            level_irrf,
        });
        
        return response.json(payroll);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
});

payrollsRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    
    const payrollsRepository = getRepository(Payroll);
    const payroll = await payrollsRepository.findOne(id);

    return response.json(payroll);
});

payrollsRouter.get('/list/employee/:id', async (request, response) => {

    const { id } = request.params;
    
    const payrollsRepository = getRepository(Payroll);
    const payroll = await payrollsRepository.findOne({
        where: { employee_id: id }
    });

    return response.json(payroll);
});

payrollsRouter.get('/list/company/:id', async (request, response) => {

    const { id } = request.params;
    
    const payrollsRepository = getRepository(Payroll);
    const payroll = await payrollsRepository.findOne({
        where: { company_id: id }
    });

    return response.json(payroll);
});

export default payrollsRouter;