import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import managersRouter from './managers.routes';
import sessionsManagersRouter from './sessionsmanagers.routes';
import employeesRouter from './employees.routes';
import sessionsEmployeesRouter from './sessionsemployees.routes';
import companiesRouter from './companies.routes';
import payrollsRouter from './payrolls.routes';

const routes = Router();

// Users
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

// Managers
routes.use('/managers', managersRouter);
routes.use('/sessionsmanagers', sessionsManagersRouter);

// Employees
routes.use('/employees', employeesRouter);
routes.use('/sessionsemployees', sessionsEmployeesRouter);

// Companies
routes.use('/companies', companiesRouter);

//Payrools
routes.use('/payrolls', payrollsRouter);

export default routes;