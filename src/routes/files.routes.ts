import { Router } from "express";
import multer from 'multer';
import uploadConfig from "../config/upload";

import CreateFileService from "../services/CreateFileService";

const filesRouter = Router();
const upload = multer(uploadConfig);

filesRouter.post(
    "/",
    upload.single('file'),
    async (request, response) => {
    
        try {

            const { 
                project_id,
                name,
                path,
             } = request.body;

            const createFile = new CreateFileService();

            const fileOb = await createFile.execute({ 
                project_id,
                name: request.file?.filename,
                path: request.file?.path
            });

            return response.json({
                file: request.file?.filename
            });

        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
});


export default filesRouter;