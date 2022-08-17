import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('request')
class Request {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('int')
    driverId: number;

}

export default Request;