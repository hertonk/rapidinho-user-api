import { Router } from "express";
import multer from 'multer';
import { getRepository } from "typeorm";
import uploadConfig from "../config/upload";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import CreateFileService from "../services/CreateFileService";

const filesRouter = Router();
const upload = multer(uploadConfig);

filesRouter.post(
    "/",
    upload.single('file'),
    async (request, response) => {
    
        try {

            const { 
                project_id
             } = request.query;

            const createFile = new CreateFileService();

            const fileOb = await createFile.execute({ 
                project_id,
                name: request.file?.filename,
            });

            return response.json({
                img: request.file?.filename
            });

        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
});

filesRouter.delete('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const filesRepository = getRepository(File);

    const file = await filesRepository.delete(id);

    return response.json();

});

export default filesRouter;