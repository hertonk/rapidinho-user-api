import { Router } from "express";

import { getRepository } from "typeorm";
import Driver from "../models/Driver";
import RequestReview from "../models/RequestReview";
import DriverTransaction from "../models/DriverTransaction";
import Request from "../models/Request";
import RequestActivity from "../models/RequestActivity";

const driversRouter = Router();

driversRouter.delete('/:id', async (request, response) => {

    try{
        const { id } = request.params;

        const driversRepositories = getRepository(Driver);

        const requestsReviewsRepositories = getRepository(RequestReview);

        const driverTransactionsRepositories = getRepository(DriverTransaction);

        const requestsRepositories = getRepository(Request);

        const requestsActivitysRepositories = getRepository(RequestActivity);

        await requestsReviewsRepositories.delete({ driverId: id });

        await driverTransactionsRepositories.delete({ driverId: id });

        const requests = await requestsRepositories.find({ where: { driverId: id } });

        const requestsForEach = requests.forEach(async (item) => {
            await requestsActivitysRepositories.delete({ requestId: item.id });
        });

        const driver = await driversRepositories.delete(id);

        return response.json({message : "The driver deleted"});
    } catch(err){
        return response.status(400).json({ error: err.message });
    }
    
});


export default driversRouter;