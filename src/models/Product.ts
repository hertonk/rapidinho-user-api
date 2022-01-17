import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Manufacturer from './Manufacturer';
import Category from './Category';

@Entity('products')
class Product {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Manufacturer)
    @JoinColumn({ name: 'manufacturer' })
    manufacturer: Manufacturer;

    @ManyToOne(() => Category)
    @JoinColumn({ name: 'category' })
    category: Category;

    @Column('varchar')
    name: string;

    @Column('varchar')
    description: string;

    @Column('varchar')
    code: string;

    @Column('varchar')
    photo: string;

    @Column('varchar')
    unit: string;

    @Column('decimal', { precision: 5, scale: 2 })
    value: number;

    @Column('int')
    stock: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Product;