import { getRepository } from 'typeorm';

import DatasheetProduct from '../models/DatasheetProduct';

interface Request {
    datasheet_id: string;
    product_id: string;
}

class CreateDatasheetProductService {

    public async execute({  datasheet_id, product_id }: Request): Promise<DatasheetProduct> {
        const datasheetsRepository = getRepository(DatasheetProduct);

        const datasheetOb = datasheetsRepository.create({
            datasheet_id,
            product_id
        });

        await datasheetsRepository.save(datasheetOb);

        return datasheetOb;
    }

}

export default CreateDatasheetProductService;