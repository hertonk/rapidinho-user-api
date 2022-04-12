import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Css from './Css';

@Entity('tensions')
class Tension {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    css_id: string;

    @ManyToOne(() => Css)
    @JoinColumn({ name: 'css_id' })
    css: Css;

    @Column('varchar')
    tension: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Tension;