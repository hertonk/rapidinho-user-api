import { Router } from "express";
import multer from 'multer';
import uploadConfig from "../config/upload";

const docsRouter = Router();
const upload = multer(uploadConfig);

docsRouter.post(
    "/",
    upload.single('file'),
    async (request, response) => {
    
        try {

            return response.json({
                img: request.file?.filename
            });

        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
});


export default docsRouter;