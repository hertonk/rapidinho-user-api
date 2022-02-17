import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Company from './Company';
import Employee from './Employee';

@Entity('payrolls')
class Payroll {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    company_id: string;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @Column('varchar')
    employee_id: string;

    @ManyToOne(() => Employee)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    @Column('varchar')
    company_code: string;

    @Column('varchar')
    employee_code: string;

    @Column('varchar')
    employee_name: string;

    @Column('varchar')
    company_name: string;

    @Column('varchar')
    company_reg: string;

    @Column('varchar')
    role: string;

    @Column('varchar')
    cost_center: string;

    @Column('varchar')
    company_department: string;

    @Column('varchar')
    company_branch: string;

    @Column('varchar')
    admission_date: string;

    @Column('varchar')
    rubrik_name: string;

    @Column('varchar')
    rubrik_code: string;

    @Column('varchar')
    reference: string;

    @Column('varchar')
    event_value: string;

    @Column('varchar')
    event_type: string;

    @Column('varchar')
    salary: string;

    @Column('varchar')
    base_inss: string;

    @Column('varchar')
    base_irrf: string;

    @Column('varchar')
    base_fgts: string;

    @Column('varchar')
    month_fgts: string;

    @Column('varchar')
    level_irrf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Payroll;