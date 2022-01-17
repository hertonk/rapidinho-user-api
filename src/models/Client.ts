import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import Brand from './Brand';
import Model from './Model';

@Entity('clients')
class Client {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('varchar')
    nick: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    telephone: string;

    @Column('varchar')
    birthday: Date;

    @Column('varchar')
    cpf: string;

    @Column('varchar')
    gender: string;

    @Column('varchar')
    obs: string;

    @Column('varchar')
    instagram: string;

    @Column('varchar')
    street: string;

    @Column('varchar')
    number: string;

    @Column('varchar')
    neighborhood: string;

    @Column('varchar')
    complement: string;

    @Column('varchar')
    city: string;

    @Column('varchar')
    state: string;

    @OneToOne(() => Brand)
    @JoinColumn({ name: 'brand' })
    brand: Brand;

    @OneToOne(() => Model)
    @JoinColumn({ name: 'model' })
    model: Model;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Client;