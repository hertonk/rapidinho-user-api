import { getRepository } from 'typeorm';

import Product from '../models/Product';

interface Request {
    id: string;
    manufacturer: string;
    category: string;
    name: string;
    description: string;
    photo: string;
    unit: string;
    value: number;
    stock: number;
}

class UpdateProductService {

    public async execute({ 
        id,
        manufacturer,
        category,
        name,
        description,
        photo,
        unit,
        value,
        stock
     }: Request): Promise<Product> {
        const productsRepository = getRepository(Product);

        const product = await productsRepository.findOne(id);

        product?.name = name;
        product?.manufacturer = manufacturer;
        product?.category = category;
        product?.description = description;
        product?.photo = photo;
        product?.unit = unit;
        product?.value = value;
        product?.stock = stock;

        await productsRepository.save(product);

        return product;
    }

}

export default UpdateProductService;