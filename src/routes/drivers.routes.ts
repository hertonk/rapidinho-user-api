import { Router } from "express";

import { getRepository } from "typeorm";
import Driver from "../models/Driver";

const driversRouter = Router();

driversRouter.delete('/:id', async (request, response) => {

    try{
        const { id } = request.params;

        const driversRepositories = getRepository(Driver);

        const driver = await driversRepositories.delete(id);

        return response.json({message : "The driver deleted"});
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});


export default driversRouter;