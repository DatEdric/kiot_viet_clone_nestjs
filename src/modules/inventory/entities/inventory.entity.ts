import { ProductVariantEntity } from '@modules/product_variants/entities/product_variant.entity';
import { ProductEntity } from '@modules/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('inventory')
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => ProductVariantEntity, { nullable: true })
  @JoinColumn({ name: 'variant_id' })
  variant?: ProductVariantEntity;

  @Column({ type: 'int', default: 0 })
  quantity: number;

  @Column({ type: 'int', nullable: true })
  min_quantity?: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  cost_price?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  batch_number?: string;

  @Column({ type: 'date', nullable: true })
  expiry_date?: Date;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;
}
