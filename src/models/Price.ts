import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('prices')
class Price {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

export default Price;