import { OrderEntity } from '@/orders/entities/order.entity';
import { ProductEntity } from '@/products/entities/product.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders_items')
export class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrderEntity, (order) => order.orderItems)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.orderItems)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @Column()
  @IsNotEmpty()
  quantity: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'unit_price',
  })
  unitPrice: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'total_price',
  })
  totalPrice: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    nullable: true,
  })
  @IsOptional()
  discount?: number;
}
