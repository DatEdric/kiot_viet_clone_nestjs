import { ProductEntity } from '@modules/products/entities/product.entity';
import { PromotionEntity } from '@modules/promotions/entities/promotion.entity';
import { IsEnum, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum DiscountType {
  PERCENTAGE = 'percentage',
  FIXED = 'fixed',
}

@Entity('promotion_products')
export class PromotionProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PromotionEntity, (promotion) => promotion.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'promotion_id' })
  promotion: PromotionEntity;

  @ManyToOne(() => ProductEntity, (product) => product.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @Column({ name: 'discount_type', type: 'enum', enum: DiscountType })
  @IsEnum(DiscountType)
  discountType: DiscountType;

  @Column({ name: 'discount_value', type: 'decimal', precision: 10, scale: 2 })
  @IsNumber()
  discountValue: number;
}
