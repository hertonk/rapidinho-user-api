import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Project from './Project';

@Entity('ucs')
class Uc {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    project_id: string;
    
    @ManyToOne(() => Project)
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @Column('varchar')
    uc: string;

    @Column('varchar')
    percentage: number;

    @Column('varchar')
    address: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Uc;