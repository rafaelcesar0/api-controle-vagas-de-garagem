import { Request, Response } from 'express';
import { apartamentoRepository } from '../repositories/apartamentoRepository';

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

  async read(req: Request, res: Response) {
    const { idApartamento } = req.params;

    try {
      let apartamento;
      if (idApartamento) {
        apartamento = await apartamentoRepository.findOne({
          where: { id: parseInt(idApartamento) },
          relations: { veiculos: true },
        });
      } else {
        apartamento = await apartamentoRepository.find({
          relations: { veiculos: true },
        });  
      }

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
    const { apartamento, bloco, morador, telefone, email } = req.body;
    const { idApartamento } = req.params;

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
      const result = await apartamentoRepository.delete(
        parseInt(idApartamento)
      );

      if (result.affected === 0) {
        return res.status(404).json({ mensage: 'Apartamento não encontrado' });
      }

      return res.status(204).end();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
