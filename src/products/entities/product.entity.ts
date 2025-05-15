import { BrandEntity } from '@/brands/entities/brand.entity';
import { CategoryEntity } from '@/categories/entities/category.entity';
import { ProductStatus } from '@/common/enums';
import { OrderItemEntity } from '@/order_items/entities/order_item.entity';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
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

  @Column('text', { nullable: true })
  @IsOptional()
  description?: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => BrandEntity, (brand) => brand.products, { nullable: true })
  @JoinColumn({ name: 'brand_id' })
  brand?: BrandEntity;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'base_price',
  })
  basePrice: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'sale_price',
    nullable: true,
  })
  @IsOptional()
  salePrice?: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'cost_price',
  })
  costPrice: number;

  @Column({ name: 'stock_quantity' })
  stockQuantity: number;

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

  //Relationship mappings
  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.product)
  orderItems?: OrderItemEntity[];
}
