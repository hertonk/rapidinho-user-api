import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('projects')
class Project {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    user_id: string;
    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column('varchar')
    type: string;

    @Column('varchar')
    state: string;

    @Column('varchar')
    distributor: string;

    @Column('varchar')
    fantasy_name: string;

    @Column('varchar')
    cpf_cnpj: string;

    @Column('varchar')
    rg: string;

    @Column('varchar')
    number_uc: string;
  
    @Column('varchar')
    telephone: string;
    
    @Column('varchar')
    email: string;

    @Column('varchar')
    invoice: string;

    @Column('varchar')
    credit_clearing: string;

    @Column('varchar')
    invoice_credit_clearing: string;

    @Column('varchar')
    latitude: string;
    
    @Column('varchar')
    longitude: string;

    @Column('varchar')
    cep: string;

    @Column('varchar')
    city: string;

    @Column('varchar')
    state_address: string;

    @Column('varchar')
    street: string;

    @Column('varchar')
    neighborhood: string;
    
    @Column('varchar')
    complement: string;

    @Column('varchar')
    number: string;

    @Column('varchar')
    transformer: string;

    @Column('varchar')
    power_transformer: string;

    @Column('varchar')
    class1: string;

    @Column('varchar')
    ramal: string;

    @Column('varchar')
    connection: string;

    @Column('varchar')
    cable: string;

    @Column('varchar')
    category: string;

    @Column('varchar')
    disjuntor: string;

    @Column('varchar')
    tension: string;

    @Column('varchar')
    post: string;

    @Column('varchar')
    instalation: string;

    @Column('varchar')
    stringbox: string;

    @Column('varchar')
    module_manufacturer: string;

    @Column('varchar')
    module_model: string;

    @Column('varchar')
    module_qtd: string;

    @Column('varchar')
    module_obs: string;

    @Column('varchar')
    module_list: string;

    @Column('varchar')
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Project;