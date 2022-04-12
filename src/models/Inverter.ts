import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Project from './Project';

@Entity('inverters')
class Inverter {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    project_id: string;

    @ManyToOne(() => Project)
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @Column('varchar')
    manufacturer: string;

    @Column('varchar')
    model: string;

    @Column('varchar')
    power: string;

    @Column('varchar')
    qtd: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Inverter;