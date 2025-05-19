import { PaymentMethodEntity } from '@modules/payment_methods/entities/payment_method.entity';
import { UserEntity } from '@modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'reference_id' })
  referenceId: number;

  @Column({ name: 'reference_type', length: 50 })
  referenceType: string;

  @ManyToOne(() => PaymentMethodEntity, { nullable: false })
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethodEntity;

  @Column('decimal', { precision: 15, scale: 2 })
  amount: number;

  @Column({ length: 50 })
  status: string;

  @Column({ name: 'transaction_id', length: 100, nullable: true })
  transactionId?: string;

  @Column({ name: 'payment_date', type: 'timestamp', nullable: true })
  paymentDate?: Date;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  createdBy?: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
