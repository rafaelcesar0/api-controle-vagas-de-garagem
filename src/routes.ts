import { Router } from 'express';
import { ApartamentoController } from './controllers/ApartamentoController';
import { VeiculoController } from './controllers/VeiculoController';

const routes = Router();

routes.post('/apartamento', new ApartamentoController().create);
routes.get('/apartamento/:idApartamento?', new ApartamentoController().read);
routes.put('/apartamento/:idApartamento', new ApartamentoController().update);
routes.delete('/apartamento/:idApartamento', new ApartamentoController().delete);

routes.post('/veiculo/apartamento/:idApartamento', new VeiculoController().create);
routes.get('/veiculo/:idVeiculo?', new VeiculoController().read);
routes.put('/veiculo/:idVeiculo', new VeiculoController().update);
routes.delete('/veiculo/:idVeiculo', new VeiculoController().delete);

export default routes;
