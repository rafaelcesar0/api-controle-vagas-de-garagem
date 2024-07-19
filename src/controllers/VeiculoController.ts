import { Request, Response } from 'express';
import { apartamentoRepository } from '../repositories/apartamentoRepository';
import { veiculoRepository } from '../repositories/veiculoRepository';

export class VeiculoController {
  async create(req: Request, res: Response) {
    const { marca, modelo, cor, placa } = req.body;
    const { idApartamento } = req.params;

    if (!marca && !modelo && !cor && !placa && !idApartamento) {
      return res.status(400).json({
        message:
          'Os campos MARCA, MODELO, COR e PLACA e ID_APARTAMENTO são obrigatórios',
      });
    }

    try {
      const apartamento = await apartamentoRepository.findOneBy({
        id: parseInt(idApartamento),
      });

      if (!apartamento) {
        return res.status(404).json({ message: 'Veiculo não encontrado' });
      }

      const newVeiculo = veiculoRepository.create({
        marca,
        modelo,
        cor,
        placa,
        apartamento,
      });

      await veiculoRepository.save(newVeiculo);

      return res.status(201).json(newVeiculo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async read(req: Request, res: Response) {
    const { idApartamento, idVeiculo } = req.params;

    try {
      let veiculo;
      if (idVeiculo) {
        veiculo = await veiculoRepository.findOne({
          where: { id: parseInt(idVeiculo) },
        });
      } else if (idApartamento) {
        veiculo = await veiculoRepository.findBy({
          apartamento: { id: parseInt(idApartamento) },
        });
      } else {
        veiculo = await veiculoRepository.find();
      }

      if (!veiculo) {
        return res.status(404).json({ message: 'Veículo não encontrado' });
      }

      return res.json(veiculo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async update(req: Request, res: Response) {
    const { marca, modelo, cor, placa } = req.body;
    const { idVeiculo } = req.params;

    try {
      const existingVeiculo = await veiculoRepository.findOneBy({
        id: parseInt(idVeiculo),
      });

      if (!existingVeiculo) {
        return res.status(404).json({ mensage: 'Veiculo não encontrado' });
      }

      veiculoRepository.merge(existingVeiculo, {
        marca,
        modelo,
        cor,
        placa,
      });
      await veiculoRepository.save(existingVeiculo);

      return res.json(existingVeiculo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async delete(req: Request, res: Response) {
    const {idVeiculo} = req.params;

    try {
      const result = await veiculoRepository.delete(parseInt(idVeiculo));

      if (result.affected === 0) {
        return res.status(404).json({ message: 'Veiculo não encontrado' });
      }

      return res.status(204).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
