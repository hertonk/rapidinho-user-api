import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany } from 'typeorm';
import Tension from './Tension';
import Css from './Css';

@Entity('tensions-css')
class TensionCss {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    tension_id: string;

    @ManyToMany(() => Tension)
    @JoinColumn({ name: 'tension_id' })
    tension: Tension;

    @Column('varchar')
    css_id: string;

    @ManyToMany(() => Css)
    @JoinColumn({ name: 'css_id' })
    css: Tension;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default TensionCss;