import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Manager from './Manager';

@Entity('companies')
class Company {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    manager_id: string;

    @ManyToOne(() => Manager)
    @JoinColumn({ name: 'manager_id' })
    manager: Manager;

    @Column('varchar')
    name: string;

    @Column('varchar')
    description: string;

    @Column('varchar')
    logo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Company;