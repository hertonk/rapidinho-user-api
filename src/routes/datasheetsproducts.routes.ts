import { Router } from "express";
import { getRepository } from 'typeorm';
import DatasheetProduct from "../models/DatasheetProduct";

import CreateDatasheetProductService from "../services/CreateDatasheetProductService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const datasheetsProductsRouter = Router();

datasheetsProductsRouter.get('/', ensureAuthenticated, async (request, response) => {

    const datasheetsProductsRepository = getRepository(DatasheetProduct);

    const obj = await datasheetsProductsRepository.find();

    return response.json(obj);

});

datasheetsProductsRouter.get('/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const datasheetsProductsRepository = getRepository(DatasheetProduct);

    const obj = await datasheetsProductsRepository.findOne(id);

    return response.json(obj);

});

datasheetsProductsRouter.get('/datasheet/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const datasheetsProductsRepository = getRepository(DatasheetProduct);

    const obj = await datasheetsProductsRepository.find({
        where: {
            datasheet_id: id
        }
    });

    return response.json(obj);

});

datasheetsProductsRouter.get('/product/:id', ensureAuthenticated, async (request, response) => {

    const { id } = request.params;

    const datasheetsProductsRepository = getRepository(DatasheetProduct);

    const obj = await datasheetsProductsRepository.find({
        where: {
            product_id: id
        }
    });

    return response.json(obj);

});


datasheetsProductsRouter.post('/', ensureAuthenticated, async (request, response) => {

    try{
        const {
           datasheet_id,
           product_id
         } = request.body;

        const createOb = new CreateDatasheetProductService();

        const obj = await createOb.execute({ 
            datasheet_id,
            product_id
        });

        return response.json(obj);
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});

export default datasheetsProductsRouter;