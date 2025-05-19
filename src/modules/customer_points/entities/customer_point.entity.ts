import { CustomerEntity } from '@modules/customers/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customer_points')
export class CustomerPointsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @Column('int', { default: 0 })
  points: number;

  @Column({ name: 'total_earned', type: 'int', default: 0 })
  totalEarned: number;

  @Column({ name: 'total_redeemed', type: 'int', default: 0 })
  totalRedeemed: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;
}
