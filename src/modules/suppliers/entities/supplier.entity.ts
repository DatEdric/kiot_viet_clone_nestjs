import { ProductEntity } from '@modules/products/entities/product.entity';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('suppliers')
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  code: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ name: 'contact_person', nullable: true })
  @IsOptional()
  @IsString()
  contactPerson?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Column({ name: 'tax_code', nullable: true })
  @IsOptional()
  @IsString()
  taxCode?: string;

  @Column({ name: 'payment_terms', nullable: true, type: 'text' })
  @IsOptional()
  paymentTerms?: string;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  notes?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'is_active', default: true })
  @IsBoolean()
  isActive: boolean;

  @OneToMany(() => ProductEntity, (product) => product.supplier)
  products: ProductEntity[];
}
