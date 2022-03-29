import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('prices-users')
class PriceUser {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column('varchar')
    min: string;

    @Column('varchar')
    max: string;

    @Column('decimal', { precision: 5, scale: 2 })
    value: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default PriceUser;