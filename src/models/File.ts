import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Project from './Project';

@Entity('files')
class File {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    project_id: string;

    @ManyToOne(() => Project)
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @Column('varchar')
    name: string;

    @Column('varchar')
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default File;