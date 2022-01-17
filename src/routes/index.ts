import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import brandsRouter from  './brands.routes';
import modelsRouter from  './models.routes';
import clientsRouter from './clients.routes';
import categoriesRouter from './categories.routes';
import manufacturersRouter from './manufacturers.routes';
import productsRouter from './products.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/brands', brandsRouter);
routes.use('/models', modelsRouter);
routes.use('/clients', clientsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/manufacturers', manufacturersRouter);
routes.use('/products', productsRouter);

export default routes;