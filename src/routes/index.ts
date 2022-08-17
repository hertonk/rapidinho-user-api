import { Router } from 'express';

import driversRouter from './drivers.routes';
import ridersRouter from './riders.routes';

const routes = Router();

// Drivers
routes.use('/drivers', driversRouter);

// Riders
routes.use('/riders', ridersRouter);

export default routes;