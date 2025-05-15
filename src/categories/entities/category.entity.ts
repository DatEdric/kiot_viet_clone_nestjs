import { CategoryStatus } from '@/common/enums';
import { ProductEntity } from '@/products/entities/product.entity';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
@Unique(['slug'])
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column({ nullable: true })
  @IsOptional()
  description?: string;

  @Column({ name: 'parent_category_id', nullable: true })
  @IsOptional()
  parentCategoryId?: number;

  @Column()
  @IsNotEmpty()
  slug: string;

  @Column({ name: 'meta_title', nullable: true })
  @IsOptional()
  metaTitle?: string;

  @Column({ name: 'meta_description', nullable: true })
  @IsOptional()
  metaDescription?: string;

  @Column({
    type: 'enum',
    enum: CategoryStatus,
    default: CategoryStatus.ACTIVE,
  })
  @IsEnum(CategoryStatus)
  status: CategoryStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relationship mappings
  @OneToMany(() => ProductEntity, (product) => product.category)
  products?: ProductEntity[];
}
