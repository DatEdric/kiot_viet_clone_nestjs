import { ProductStatus } from '@common/enums';
import { BrandEntity } from '@modules/brands/entities/brand.entity';
import { CategoryEntity } from '@modules/categories/entities/category.entity';
import { OrderItemEntity } from '@modules/order_items/entities/order_item.entity';
import { SupplierEntity } from '@modules/suppliers/entities/supplier.entity';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  @IsNotEmpty()
  sku: string;

  @Column({ unique: true })
  @IsNotEmpty()
  barcode: string;

  @Column('text', { nullable: true })
  @IsOptional()
  description?: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => BrandEntity, (brand) => brand.products, {
    nullable: true,
  })
  @JoinColumn({ name: 'brand_id' })
  brand?: BrandEntity;

  @ManyToOne(() => SupplierEntity, (supplier) => supplier.products, {
    nullable: true,
  })
  @JoinColumn({ name: 'supplier_id' })
  @IsOptional()
  supplier?: SupplierEntity;

  @Column('decimal', { precision: 10, scale: 2, name: 'cost_price' })
  costPrice: number;

  @Column('decimal', { precision: 10, scale: 2, name: 'retail_price' })
  retailPrice: number;
  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'wholesale_price',
    nullable: true,
  })
  @IsOptional()
  wholesalePrice?: number;

  @Column('decimal', {
    precision: 5,
    scale: 2,
    name: 'tax_rate',
    default: 0,
  })
  taxRate: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    nullable: true,
  })
  @IsOptional()
  weight?: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsOptional()
  dimensions?: string;

  @Column({ name: 'stock_quantity' })
  stockQuantity: number;

  @Column({ name: 'is_inventory_tracked', default: true })
  @IsBoolean()
  isInventoryTracked: boolean;

  @Column({ name: 'is_active', default: true })
  @IsBoolean()
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ProductStatus,
    default: ProductStatus.ACTIVE,
  })
  @IsEnum(ProductStatus)
  status: ProductStatus;

  @Column('simple-array', { nullable: true })
  @IsOptional()
  images?: string[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.product)
  orderItems?: OrderItemEntity[];
}
