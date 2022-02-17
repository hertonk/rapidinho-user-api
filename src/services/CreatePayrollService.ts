import { getRepository } from 'typeorm';

import Payroll from "../models/Payroll";

interface Request{
    company_id: string;
    employee_id: string;
    company_code: string;
    employee_code: string;
    employee_name: string;
    company_name: string;
    company_reg: string;
    role: string;
    cost_center: string;
    company_department: string;
    company_branch: string;
    admission_date: string;
    rubrik_name: string;
    rubrik_code: string;
    reference: string;
    event_value: string;
    event_type: string;
    salary: string;
    base_inss: string;
    base_irrf: string;
    base_fgts: string;
    month_fgts: string;
    level_irrf: string;
}

class CreatePayrollService {

    public async execute({
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
     }: Request): Promise<Payroll>{
        const payrollsRepository = getRepository(Payroll);

        const payroll = payrollsRepository.create({
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

        await payrollsRepository.save(payroll);

        return payroll;
    }
}

export default CreatePayrollService;