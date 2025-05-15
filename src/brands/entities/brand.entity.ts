import { ProductEntity } from '@/products/entities/product.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('brands')
export class BrandEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column({ nullable: true })
  @IsOptional()
  description?: string;

  @Column({ name: 'logo_url', nullable: true })
  @IsOptional()
  logoUrl?: string;

  @Column({ nullable: true })
  @IsOptional()
  website?: string;

  @Column({ name: 'founded_year', nullable: true })
  @IsOptional()
  foundedYear?: number;

  @Column({ nullable: true })
  @IsOptional()
  country?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Relationship mappings
  @OneToMany(() => ProductEntity, (product) => product.brand)
  products?: ProductEntity[];
}
