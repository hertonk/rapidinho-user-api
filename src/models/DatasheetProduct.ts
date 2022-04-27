import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany } from 'typeorm';
import Datasheet from './Datasheet';
import Product from './Product';

@Entity('datasheets-products')
class DatasheetProduct {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    datasheet_id: string;

    @ManyToMany(() => Datasheet)
    @JoinColumn({ name: 'datasheet_id' })
    datasheet: Datasheet;

    @Column('varchar')
    product_id: string;

    @ManyToMany(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default DatasheetProduct;