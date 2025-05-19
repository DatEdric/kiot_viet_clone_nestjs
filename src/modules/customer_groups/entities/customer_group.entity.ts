import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customer_groups')
export class CustomerGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'discount_rate', type: 'float', default: 0 })
  discountRate: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;
}
