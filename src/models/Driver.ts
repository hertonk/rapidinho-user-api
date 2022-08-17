import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('driver')
class Driver {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('varchar')
    firstName: string;

}

export default Driver;