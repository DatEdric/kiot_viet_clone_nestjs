import { InventoryCheckEntity } from '@modules/inventory/entities/inventory-check.entity';
import { ProductVariantEntity } from '@modules/product_variants/entities/product_variant.entity';
import { ProductEntity } from '@modules/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('inventory_check_items')
export class InventoryCheckItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => InventoryCheckEntity,
    (inventoryCheck) => inventoryCheck.items,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'check_id' })
  check: InventoryCheckEntity;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => ProductVariantEntity, { nullable: true })
  @JoinColumn({ name: 'variant_id' })
  variant?: ProductVariantEntity;

  @Column({ type: 'int', name: 'expected_quantity' })
  expectedQuantity: number;

  @Column({ type: 'int', name: 'actual_quantity' })
  actualQuantity: number;

  @Column({ type: 'int' })
  difference: number;

  @Column({ type: 'text', nullable: true })
  notes?: string;
}
