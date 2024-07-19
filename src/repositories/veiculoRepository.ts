import { AppDataSource } from '../data-source';
import { Veiculo } from '../entities/Veiculo';

export const veiculoRepository = AppDataSource.getRepository(Veiculo);
