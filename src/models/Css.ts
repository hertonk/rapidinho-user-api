import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import State from './State';

@Entity('css')
class Css {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    state_id: string;

    @ManyToOne(() => State)
    @JoinColumn({ name: 'state_id' })
    state: State;

    @Column('varchar')
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Css;