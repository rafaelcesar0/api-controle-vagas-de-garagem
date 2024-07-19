import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Veiculo } from './Veiculo';

@Entity('apartamentos')
export class Apartamento {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Veiculo, (veiculo) => veiculo.idApartamento)
  veiculos: Veiculo[];

  @Column({ type: 'int' })
  bloco: number;

  @Column({ type: 'int' })
  apartamento: number;

  @Column({ type: 'varchar', length: 150 })
  morador: string;

  @Column({ type: 'varchar', length: 13 })
  telefone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;
}
