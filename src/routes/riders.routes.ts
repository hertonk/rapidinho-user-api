import { Router } from "express";

import { getRepository } from "typeorm";
import Rider from "../models/Rider";
import RiderWallet from "../models/RiderWallet";
import Request from "../models/Request";

const ridersRouter = Router();

ridersRouter.delete('/:id',  async (request, response) => {

    try{
        const { id } = request.params;

        const ridersRepositories = getRepository(Rider);

        const ridersWalletsRepositories = getRepository(RiderWallet);

        const requestsRepositories = getRepository(Request);

        await ridersWalletsRepositories.delete({ riderId: id });

        await requestsRepositories.delete({ riderId: id });

        const rider = await ridersRepositories.delete(id);

        return response.json({message : "The rider deleted"});
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});


export default ridersRouter;