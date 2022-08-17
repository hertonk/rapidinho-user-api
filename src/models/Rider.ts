import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rider')
class Rider {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('varchar')
    firstName: string;

}

export default Rider;