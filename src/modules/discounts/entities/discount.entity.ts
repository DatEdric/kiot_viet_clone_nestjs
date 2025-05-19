import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export enum DiscountType {
  PERCENTAGE = 'PERCENTAGE',
  FIXED = 'FIXED',
}

@Entity('discounts')
export class DiscountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  code: string;

  @Column({
    type: 'enum',
    enum: DiscountType,
  })
  @IsEnum(DiscountType)
  type: DiscountType;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  @Min(0)
  value: number;

  @Column('decimal', { name: 'min_order_amount', precision: 10, scale: 2 })
  @IsNumber()
  @Min(0)
  minOrderAmount: number;

  @Column({ name: 'start_date', type: 'timestamp' })
  @IsDate()
  startDate: Date;

  @Column({ name: 'end_date', type: 'timestamp' })
  @IsDate()
  endDate: Date;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'usage_limit', type: 'int', nullable: true })
  @IsOptional()
  @Min(0)
  usageLimit?: number;

  @Column({ name: 'used_count', type: 'int', default: 0 })
  @Min(0)
  usedCount: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
