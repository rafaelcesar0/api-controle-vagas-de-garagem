import { Router } from 'express';
import { ApartamentoController } from './controllers/ApartamentoController';

const routes = Router();

routes.post('/apartamento', new ApartamentoController().create);
routes.get('/apartamento', new ApartamentoController().list);
routes.get('/apartamento/:idApartamento', new ApartamentoController().read);
routes.delete('/apartamento/:idApartamento', new ApartamentoController().delete);
routes.put('/apartamento/:idApartamento', new ApartamentoController().update);
routes.post('/apartamento/:idApartamento/veiculo', new ApartamentoController().createVeiculo);

export default routes;
