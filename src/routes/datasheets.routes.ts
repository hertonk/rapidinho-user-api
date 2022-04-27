import { Router } from "express";
import CreateDatasheetService from "../services/CreateDatasheetService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import { getRepository } from "typeorm";
import Datasheet from "../models/Datasheet";

const datasheetsRouter = Router();

datasheetsRouter.post('/', ensureAuthenticated, async (request, response) => {

    const { name, filepdf, fileimage } = request.body;

    const datasheetsRoleService = new CreateDatasheetService();

    const datasheet = await datasheetsRoleService.execute({ 
        name, 
        filepdf, 
        fileimage 
    });

    if (datasheet instanceof Error) {
      return response.status(400).json(datasheet.message);
    }

    return response.json(datasheet);
    
});

datasheetsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const datasheetsRepositories = getRepository(Datasheet);

    const datasheets = await datasheetsRepositories.find();

    return response.json(datasheets);
    
});

datasheetsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const datasheetsRepositories = getRepository(Datasheet);

    const datasheet = await datasheetsRepositories.findOne(id);

    return response.json(datasheet);
    
});

export default datasheetsRouter;