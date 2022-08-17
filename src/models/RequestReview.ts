import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('request_review')
class RequestReview {
    
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('int')
    driverId: number;

}

export default RequestReview;