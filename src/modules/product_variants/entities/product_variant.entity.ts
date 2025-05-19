import { ProductEntity } from '@modules/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product_variants')
export class ProductVariantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @Column({ type: 'varchar', length: 100 })
  sku: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  barcode: string;

  @Column({ name: 'variant_name', type: 'varchar', length: 150 })
  variantName: string;

  @Column({
    name: 'cost_price',
    type: 'decimal',
    precision: 15,
    scale: 2,
    default: 0,
  })
  costPrice: number;

  @Column({
    name: 'retail_price',
    type: 'decimal',
    precision: 15,
    scale: 2,
    default: 0,
  })
  retailPrice: number;

  @Column({
    name: 'wholesale_price',
    type: 'decimal',
    precision: 15,
    scale: 2,
    default: 0,
  })
  wholesalePrice: number;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;
}
