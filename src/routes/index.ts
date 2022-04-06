import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import categoriesProductsRouter from './categoriesproducts.routes';
import productsRouter from './products.routes';
import manufacturesRouter from './manufactures.routes';
import pricesRouter from './prices.routes';
import pricesUsersRouter from './pricesusers.routes';

const routes = Router();

// Users
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

//Categories Products
routes.use('/categoriesproducts', categoriesProductsRouter);

//Manufactures
routes.use('/manufactures', manufacturesRouter);

//Products
routes.use('/products', productsRouter);

//Prices
routes.use('/prices', pricesRouter);

//Prices Users
routes.use('/pricesusers', pricesRouter);

export default routes;