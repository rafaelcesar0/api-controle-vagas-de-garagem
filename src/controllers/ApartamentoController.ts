import { Request, Response } from 'express';
import { apartamentoRepository } from '../repositories/apartamentoRepository';
import { veiculoRepository } from '../repositories/veiculoRepository';

export class ApartamentoController {
  async create(req: Request, res: Response) {
    const { apartamento, bloco, morador, telefone, email } = req.body;

    if (!apartamento && !bloco && !morador && !telefone) {
      return res.status(400).json({
        message:
          'Os campos APARTAMENTO, BLOCO, MORADOR e TELEFONE são obrigatórios',
      });
    }

    try {
      const newApartamento = apartamentoRepository.create({
        apartamento,
        bloco,
        morador,
        telefone,
        email,
      });
      
      await apartamentoRepository.save(newApartamento);
      
      return res.status(201).json(newApartamento);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const apartamentos = await apartamentoRepository.find({
        relations: { veiculos: true },
      });

      return res.json(apartamentos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async read(req: Request, res: Response) {
    const { idApartamento } = req.params;

    try {
      const apartamento = await apartamentoRepository.findOne({
        where: { id: parseInt(idApartamento) },
        relations: { veiculos: true },
      });

      if (!apartamento) {
        return res.status(404).json({ mensage: 'Apartamento não encontrado' });
      }

      return res.json(apartamento);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async update(req: Request, res: Response) {
    const { idApartamento } = req.params;
    const { apartamento, bloco, morador, telefone, email } = req.body;

    try {
      const existingApartamento = await apartamentoRepository.findOneBy({
        id: parseInt(idApartamento),
      });

      if (!existingApartamento) {
        return res.status(404).json({ mensage: 'Apartamento não encontrado' });
      }

      apartamentoRepository.merge(existingApartamento, {
        apartamento,
        bloco,
        morador,
        telefone,
        email,
      });
      await apartamentoRepository.save(existingApartamento);

      return res.json(existingApartamento);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async delete(req: Request, res: Response) {
    const { idApartamento } = req.params;

    try {
      const result = await apartamentoRepository.delete(parseInt(idApartamento));

      if (result.affected === 0) {
        return res.status(404).json({ mensage: 'Apartamento não encontrado' });
      }

      return res.status(204).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }


  async createVeiculo(req: Request, res: Response) {
    const { marca, modelo, cor, placa } = req.body;
    const { idApartamento } = req.params;

    try {
      const apartamento = await apartamentoRepository.findOneBy({
        id: Number(idApartamento),
      });

      if (!apartamento) {
        return res.status(404).json({ message: 'Apartamento não encontrado' });
      }
      if (!marca && !modelo && !cor && !placa) {
        return res.status(400).json({
          message:
            'Os campos MARCA, MODELO, COR e PLACA são obrigatórios',
        });
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

  // async readVeiculo(req: Request, res: Response) {
  //   const { idApartamento } = req.params;

  //   try {
  //     const apartamento = await apartamentoRepository.findOneBy({
  //       id: Number(idApartamento),
  //     });

  //     if (!apartamento) {
  //       return res.status(404).json({ message: 'Apartamento não encontrado' });
  //     }

  //     const newVeiculo = veiculoRepository.create({
  //       marca,
  //       modelo,
  //       cor,
  //       placa,
  //       apartamento,
  //     });

  //     await veiculoRepository.save(newVeiculo);

  //     return res.status(201).json(newVeiculo);
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({ message: 'Internal Server Error' });
  //   }
  // }
}
