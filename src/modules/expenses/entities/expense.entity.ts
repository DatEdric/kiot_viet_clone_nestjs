import { ExpenseCategoryEntity } from '@modules/expense_categories/entities/expense_category.entity';
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

@Entity('expenses')
export class ExpenseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ExpenseCategoryEntity, { nullable: false })
  @JoinColumn({ name: 'expense_category_id' })
  expenseCategory: ExpenseCategoryEntity;

  @Column('decimal', { precision: 15, scale: 2 })
  amount: number;

  @ManyToOne(() => PaymentMethodEntity, { nullable: false })
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethodEntity;

  @Column({ type: 'date', name: 'expense_date' })
  expenseDate: Date;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ name: 'reference_document', nullable: true })
  referenceDocument?: string;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
