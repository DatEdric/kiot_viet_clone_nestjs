export class InventoryTransaction {}
import { ProductVariantEntity } from '@modules/product_variants/entities/product_variant.entity';
import { ProductEntity } from '@modules/products/entities/product.entity';
import { UserEntity } from '@modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('inventory_transactions')
export class InventoryTransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => ProductVariantEntity, { nullable: true })
  @JoinColumn({ name: 'variant_id' })
  variant?: ProductVariantEntity;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'varchar', length: 50 })
  type: string; // ví dụ: 'nhập', 'xuất', 'kiểm kê'

  @Column({ type: 'int', nullable: true })
  reference_id?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  reference_type?: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  cost_price?: number;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  createdBy?: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
