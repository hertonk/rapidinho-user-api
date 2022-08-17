import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('request')
class Request {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('int')
    driverId: number;

    @Column('int')
    riderId: number;

}

export default Request;