import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Apartamento } from './Apartamento';

@Entity('veiculos')
export class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  marca: string;

  @Column({ type: 'varchar', length: 30 })
  modelo: string;

  @Column({ type: 'varchar', length: 15 })
  cor: string;

  @Column({ type: 'varchar', length: 7 })
  placa: string;

  @ManyToOne(() => Apartamento, (apartamento) => apartamento.veiculos)
  @JoinColumn({ name: 'id_apartamento' })
  apartamento: Apartamento;
}
