import { Router } from 'express';
import { indexRoute } from './routes/index';
import { loginRoute } from './routes/login';
import { rotaRoute } from './routes/rota';

export const routes: Router = Router();

routes.use(indexRoute);
routes.use(loginRoute);
routes.use(rotaRoute);