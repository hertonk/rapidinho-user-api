import { getRepository } from 'typeorm';

import Datasheet from '../models/Datasheet';

interface Request {
    name: string;
    filepdf: string;
    fileimage: string;
}

class CreateCableService {

    public async execute({ name, filepdf, fileimage }: Request): Promise<Datasheet> {
        const datasheetsRepository = getRepository(Datasheet);

        const datasheet = datasheetsRepository.create({
            name,
            filepdf,
            fileimage
        });

        await datasheetsRepository.save(datasheet);

        return datasheet;
    }

}

export default CreateCableService;