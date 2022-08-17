import { Router } from "express";

import { getRepository } from "typeorm";
import Driver from "../models/Driver";
import RequestReview from "../models/RequestReview";
import DriverTransaction from "../models/DriverTransaction";
import Request from "../models/Request";

const driversRouter = Router();

driversRouter.delete('/:id', async (request, response) => {

    try{
        const { id } = request.params;

        const driversRepositories = getRepository(Driver);

        const requestsReviewsRepositories = getRepository(RequestReview);

        const driverTransactionsRepositories = getRepository(DriverTransaction);

        const requestsRepositories = getRepository(Request);

        await requestsReviewsRepositories.delete({ driverId: id });

        await driverTransactionsRepositories.delete({ driverId: id });

        await requestsRepositories.delete({ driverId: id });

        const driver = await driversRepositories.delete(id);

        return response.json({message : "The driver deleted"});
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});


export default driversRouter;