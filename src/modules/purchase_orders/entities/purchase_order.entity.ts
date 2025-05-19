import { PurchaseOrderItemEntity } from '@/modules/purchase_order_items/entities/purchase_order_item.entity';
import { SupplierEntity } from '@modules/suppliers/entities/supplier.entity';
import { UserEntity } from '@modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('purchase_orders')
export class PurchaseOrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SupplierEntity, { nullable: false })
  @JoinColumn({ name: 'supplier_id' })
  supplier: SupplierEntity;

  @Column({ name: 'po_number', type: 'varchar', length: 100, unique: true })
  poNumber: string;

  @Column({ name: 'order_date', type: 'date' })
  orderDate: string;

  @Column({ name: 'expected_date', type: 'date', nullable: true })
  expectedDate: string;

  @Column({ type: 'varchar', length: 100 })
  status: string;

  @Column({ name: 'payment_status', type: 'varchar', length: 100 })
  paymentStatus: string;

  @Column({ name: 'total_amount', type: 'decimal', precision: 15, scale: 2 })
  totalAmount: number;

  @Column({ name: 'paid_amount', type: 'decimal', precision: 15, scale: 2 })
  paidAmount: number;

  @Column({ name: 'due_amount', type: 'decimal', precision: 15, scale: 2 })
  dueAmount: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => PurchaseOrderItemEntity, (item) => item.purchaseOrder)
  items: PurchaseOrderItemEntity[];
}
