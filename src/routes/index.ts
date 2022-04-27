import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import categoriesProductsRouter from './categoriesproducts.routes';
import productsRouter from './products.routes';
import manufacturesRouter from './manufactures.routes';
import pricesRouter from './prices.routes';
import pricesUsersRouter from './pricesusers.routes';
import projectsRouter from './projects.routes';
import ucsRouter from './ucs.routes';
import invertersRouter from './inverters.routes';
import filesRouter from './files.routes';
import receiptsRouter from './receipts.routes';
import paymentsRouter from './payments.routes';
import budgetsRouter from './budgets.routes';
import providersRouter from './providers.routes';
import budgetsProvidersRouter from './budgetsproviders.routes';
import clientsRouter from './clients.routes';
import statesRouter from './states.routes';
import cssRouter from './css.routes';
import tensionRouter from './tensions.routes';
import cablesRouter from './cables.routes';
import switchesRouter from './switches.routes';
import tensionsCssRouter from './tessioncss.routes';
import rolesRouter from './roles.routes';
import permissionsRouter from './permissions.routes';
import usersACLRouter from './users.acl.routes';
import rolesPermissionsRouter from './rolespermissions.routes';
import datasheetsRouter from './datasheets.routes';
import docsRouter from './docs.routes';
import datasheetsProductsRouter from './datasheetsproducts.routes';

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
routes.use('/pricesusers', pricesUsersRouter);

//Projects
routes.use('/projects', projectsRouter);

//Ucs
routes.use('/ucs', ucsRouter);

//Inverters
routes.use('/inverters', invertersRouter);

//Files
routes.use('/filesupload', filesRouter);

//Receipts
routes.use('/receipts', receiptsRouter);

//Payments
routes.use('/payments', paymentsRouter);

//Budgets
routes.use('/budgets', budgetsRouter);

//Providers
routes.use('/providers', providersRouter);

//Budgets Providers
routes.use('/budgetsproviders', budgetsProvidersRouter);

//Clients
routes.use('/clients', clientsRouter);

//States
routes.use('/states', statesRouter);

//Css
routes.use('/css', cssRouter);

//Tensions
routes.use('/tensions', tensionRouter);

//Cables
routes.use('/cables', cablesRouter);

//Switches
routes.use('/switches', switchesRouter);

//Tension Css
routes.use('/tensionscss', tensionsCssRouter);

//Roles
routes.use('/roles', rolesRouter);
  
//Permissions
routes.use("/permissions", permissionsRouter);

//Users ACL
routes.use("/users/acl", usersACLRouter);

//Roles ID
routes.use("/roles/:roleId", rolesPermissionsRouter);  

//Datasheets
routes.use("/datasheets", datasheetsRouter);

//Docs
routes.use("/docs", docsRouter);

//Datasheets
routes.use("/datasheetsproducts", datasheetsProductsRouter);

export default routes;