import { ProductVariantEntity } from '@modules/product_variants/entities/product_variant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('variant_attributes')
export class VariantAttributeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductVariantEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'variant_id' })
  variant: ProductVariantEntity;

  @Column({ name: 'attribute_name', type: 'varchar', length: 100 })
  attributeName: string;

  @Column({ name: 'attribute_value', type: 'varchar', length: 150 })
  attributeValue: string;
}
