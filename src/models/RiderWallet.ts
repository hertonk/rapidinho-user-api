import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rider_wallet')
class RiderWallet {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('int')
    riderId: number;

}

export default RiderWallet;
