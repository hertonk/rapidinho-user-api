import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('request_activity')
class RequestActivity {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('int')
    requestId: number;

}

export default RequestActivity;