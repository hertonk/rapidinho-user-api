import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Brand from './Brand';

@Entity('models')
class Model {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @ManyToOne(() => Brand)
    @JoinColumn({ name: 'brand' })
    brand: Brand;

    @Column('varchar')
    obs: string;

    @Column('varchar')
    photo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Model;