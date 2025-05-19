import { OrderSource, OrderStatus, PaymentStatus } from '@/common/enums';
import { CustomerEntity } from '@modules/customers/entities/customer.entity'; // Đảm bảo bạn có entity này
import { OrderItemEntity } from '@modules/order_items/entities/order_item.entity';
import { UserEntity } from '@modules/users/entities/user.entity';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
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

  @Column({ name: 'order_number', unique: true })
  @IsNotEmpty()
  @IsString()
  orderNumber: string; // Số đơn hàng

  @ManyToOne(() => CustomerEntity, (customer) => customer.orders, {
    nullable: true,
  })
  @JoinColumn({ name: 'customer_id' })
  customer?: CustomerEntity; // Khách hàng

  @ManyToOne(() => UserEntity, (user) => user.orders, { nullable: true })
  @JoinColumn({ name: 'seller_id' })
  seller?: UserEntity; // Nhân viên bán hàng

  @ManyToOne(() => UserEntity, (user) => user.ordersPlaced)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity; // Người tạo đơn (có thể là user đăng nhập)

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'sub_total',
  })
  @IsNumber()
  subTotal: number; // Tổng tiền hàng

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'discount_amount',
    nullable: true,
  })
  @IsOptional()
  discountAmount?: number; // Số tiền giảm giá

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'tax_amount',
    nullable: true,
  })
  @IsOptional()
  taxAmount?: number; // Thuế

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
    name: 'grand_total',
  })
  @IsNumber()
  grandTotal: number; // Tổng tiền thanh toán

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'paid_amount',
    default: 0,
  })
  paidAmount: number; // Đã thanh toán

  @Column('decimal', {
    precision: 10,
    scale: 2,
    name: 'due_amount',
    default: 0,
  })
  dueAmount: number; // Còn lại

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  @IsEnum(OrderStatus)
  status: OrderStatus; // Trạng thái đơn hàng

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    name: 'payment_status',
    default: PaymentStatus.UNPAID,
  })
  @IsEnum(PaymentStatus)
  paymentStatus: PaymentStatus; // Trạng thái thanh toán

  @Column({ name: 'payment_method' })
  @IsNotEmpty()
  paymentMethod: string;

  @Column({ name: 'shipping_address' })
  @IsNotEmpty()
  shippingAddress: string;

  @Column({
    type: 'enum',
    enum: OrderSource,
    default: OrderSource.STORE,
  })
  @IsEnum(OrderSource)
  source: OrderSource; // Nguồn đơn

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  notes?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems?: OrderItemEntity[];
}
