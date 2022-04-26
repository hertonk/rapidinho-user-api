import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Manufacturer from './Manufacturer';
import CategoryProduct from './CategoryProduct';

@Entity('products')
class Product {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    manufacturer_id: string;

    @ManyToOne(() => Manufacturer)
    @JoinColumn({ name: 'manufacturer_id' })
    manufacturer: Manufacturer;

    @Column('varchar')
    category_id: string;

    @ManyToOne(() => CategoryProduct)
    @JoinColumn({ name: 'category_id' })
    category: CategoryProduct;

    @Column('varchar')
    model: string;

    @Column('varchar')
    power: string;

    @Column('varchar')
    inmetro: string;

    @Column('varchar')
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Product;