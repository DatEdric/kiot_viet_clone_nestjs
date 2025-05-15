import { OrderStatus } from '@/common/enums';
import { OrderItemResponseDto } from '../../order_items/dto/order-item-respone.dto';
import { UserResponseDto } from '../../users/dto/user-respone.dto';

export class OrderResponseDto {
  id: number;
  user: UserResponseDto;
  orderItems: OrderItemResponseDto[];
  totalAmount: number;
  shippingAmount?: number;
  discountAmount?: number;
  status: OrderStatus;
  shippingAddress: string;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}
