import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('driver_transaction')
class DriverTransaction {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('int')
    driverId: number;

}

export default DriverTransaction;