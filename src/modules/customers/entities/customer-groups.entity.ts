import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('customer_groups')
export class CustomerGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  discount_rate: number;

  @OneToMany(() => CustomerEntity, (customer) => customer.customerGroup)
  customers: CustomerEntity[];
}
