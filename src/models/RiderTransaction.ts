import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rider_transaction')
class RiderTransaction {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('int')
    riderId: number;

}

export default RiderTransaction;