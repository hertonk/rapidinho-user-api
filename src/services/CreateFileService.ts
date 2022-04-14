import { getRepository } from 'typeorm';

import File from '../models/File';

interface Request {
    project_id: string;
    name: string;
}

class CreateFileService {

    public async execute({ project_id, name}: Request): Promise<File> {
        const filesRepository = getRepository(File);

        const file = filesRepository.create({
            project_id,
            name
        });

        await filesRepository.save(file);

        return file;
    }

}

export default CreateFileService;