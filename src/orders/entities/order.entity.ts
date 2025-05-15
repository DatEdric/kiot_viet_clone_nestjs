import { OrderStatus } from '@/common/enums';
import { OrderItemEntity } from '@/order_items/entities/order_item.entity';
import { UserEntity } from '@/users/entities/user.entity';
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

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'total_amount',
  })
  totalAmount: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'shipping_amount',
    nullable: true,
  })
  @IsOptional()
  shippingAmount?: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'discount_amount',
    nullable: true,
  })
  @IsOptional()
  discountAmount?: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @Column({ name: 'shipping_address' })
  @IsNotEmpty()
  shippingAddress: string;

  @Column({ name: 'payment_method' })
  @IsNotEmpty()
  paymentMethod: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relationship mappings
  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems?: OrderItemEntity[];
}
