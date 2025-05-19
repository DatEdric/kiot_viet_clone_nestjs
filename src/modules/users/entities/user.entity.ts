import { UserRole } from '@/common/enums';
import { OrderEntity } from '@modules/orders/entities/order.entity';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ name: 'full_name', nullable: true })
  @IsOptional()
  fullName?: string;

  @Column({ name: 'phone_number', nullable: true })
  @IsOptional()
  phoneNumber?: string;

  @Column({ nullable: true })
  @IsOptional()
  address?: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  @IsEnum(UserRole)
  role: UserRole;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'last_login', nullable: true })
  lastLogin?: Date;

  // Relationship mappings can be added here
  @OneToMany(() => OrderEntity, (order) => order.user)
  orders?: OrderEntity[];
  userRoles: any;
  notifications: any;
  auditLogs: any;
}
