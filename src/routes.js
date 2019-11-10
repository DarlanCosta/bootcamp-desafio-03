import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrdersController from './app/controllers/HelpOrdersController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Autenticação
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Alunos
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

// Checkins
routes.get('/students/:id/checkins', CheckinController.index);
routes.post('/students/:id/checkins', CheckinController.store);

// Pedidos de auxílio
routes.post('/students/:id/help-orders', HelpOrdersController.store);
routes.get('/students/:id/help-orders', HelpOrdersController.index);

// Pedidos de auxílio - Respostas
routes.put('/help_orders/:id/answer', HelpOrdersController.update);

// Planos
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

// Matrículas
routes.get('/registration', RegistrationController.index);
routes.post('/registration', RegistrationController.store);
routes.put('/registration/:id', RegistrationController.update);
routes.delete('/registration/:id', RegistrationController.delete);



export default routes;
