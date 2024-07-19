import { Router } from 'express';
import { ApartamentoController } from './controllers/ApartamentoController';

const routes = Router();

routes.post('/subject', new ApartamentoController().create);

export default routes;
