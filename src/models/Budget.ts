import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('budgets')
class Budget {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    min: string;

    @Column('varchar')
    max: string;

    @Column('uuid')
    budget_base: string;

    @Column('varchar')
    inverter: string;

    @Column('varchar')
    module: string;

    @Column('varchar')
    module_qtd: string;

    @Column('varchar')
    materials: string;

    @Column('varchar')
    gift: string;

    @Column('varchar')
    installation: string;

    @Column('varchar')
    standard: string;

    @Column('varchar')
    freight: string;

    @Column('varchar')
    total_coast: string;

    @Column('varchar')
    margin: string;

    @Column('varchar')
    nf: string;

    @Column('varchar')
    fiscal_coast: string;

    @Column('varchar')
    commission: string;

    @Column('varchar')
    real_margin: string;

    @Column('varchar')
    full_price: string;

    @Column('varchar')
    discount_percentage: string;

    @Column('varchar')
    discount_real: string;

    @Column('varchar')
    price_discount: string;

    @Column('varchar')
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Budget;