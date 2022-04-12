import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Provider from './Provider';

@Entity('budgets-providers')
class BudgetProvider {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    provider_id: string;

    @ManyToOne(() => Provider)
    @JoinColumn({ name: 'provider_id' })
    provider: Provider;

    @Column('varchar')
    min: string;

    @Column('varchar')
    max: string;

    @Column('text')
    material_list: string;

    @Column('varchar')
    value: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default BudgetProvider;