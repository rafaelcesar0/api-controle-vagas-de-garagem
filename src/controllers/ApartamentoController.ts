import { Request, Response } from 'express';

export class ApartamentoController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
  }
}
