import { getRepository } from 'typeorm';

import File from '../models/File';

interface Request {
    project_id: string;
    name: string;
    path: string;
}

class CreateFileService {

    public async execute({ project_id, name, path }: Request): Promise<File> {
        const filesRepository = getRepository(File);

        const file = filesRepository.create({
            project_id,
            name,
            path 
        });

        await filesRepository.save(file);

        return file;
    }

}

export default CreateFileService;