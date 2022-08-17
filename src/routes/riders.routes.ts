import { Router } from "express";

import { getRepository } from "typeorm";
import Rider from "../models/Rider";
import RiderWallet from "../models/RiderWallet";
import Request from "../models/Request";
import RequestActivity from "../models/RequestActivity";

const ridersRouter = Router();

ridersRouter.delete('/:id',  async (request, response) => {

    try{
        const { id } = request.params;

        const ridersRepositories = getRepository(Rider);

        const ridersWalletsRepositories = getRepository(RiderWallet);

        const requestsRepositories = getRepository(Request);

        const requestsActivitysRepositories = getRepository(RequestActivity);

        await ridersWalletsRepositories.delete({ riderId: id });

        const requests = await requestsRepositories.find({ where: { riderId: id } });

        const requestsForEach = requests.forEach(async (item) => {
            await requestsActivitysRepositories.delete({ requestId: item.id});
        });

        await requestsRepositories.delete({ riderId: id });

        const rider = await ridersRepositories.delete(id);

        return response.json({message : "The rider deleted"});
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});


export default ridersRouter;