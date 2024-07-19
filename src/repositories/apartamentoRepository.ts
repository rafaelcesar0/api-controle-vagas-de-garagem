import { AppDataSource } from '../data-source';
import { Apartamento } from '../entities/Apartamento';

export const apartamentoRepository = AppDataSource.getRepository(Apartamento);
