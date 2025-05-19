import { CustomerGroupEntity } from '@modules/customers/entities/customer-groups.entity';
import { UserEntity } from '@modules/users/entities/user.entity';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.customers, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  code: string;

  @Column({ name: 'full_name' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Column()
  @IsNotEmpty()
  @IsPhoneNumber('VN')
  phone: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Column({ nullable: true })
  @IsOptional()
  address?: string;

  @Column({ name: 'tax_code', nullable: true })
  @IsOptional()
  taxCode?: string;

  @ManyToOne(() => CustomerGroupEntity, (group) => group.customers, {
    nullable: true,
  })
  @JoinColumn({ name: 'customer_group_id' })
  customerGroup?: CustomerGroupEntity;

  @Column({ type: 'date', nullable: true })
  @IsOptional()
  @IsDate()
  birthday?: Date;

  @Column({ type: 'enum', enum: Gender, nullable: true })
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  notes?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}
