import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Project from './Project';

@Entity('payments')
class Payment {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    project_id: string;

    @ManyToOne(() => Project)
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @Column('varchar')
    type: string;

    @Column('date')
    venc: string;

    @Column('date')
    payment: string;

    @Column('varchar')
    desc: string;

    @Column('varchar')
    value: string;

    @Column('varchar')
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Payment;