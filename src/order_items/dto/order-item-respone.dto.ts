import { ProductResponseDto } from '@/products/dtos/product-respone.dto';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderItemDto } from './create-order-item.dto';

export class OrderItemResponseDto extends PartialType(CreateOrderItemDto) {
  id: number;
  product: ProductResponseDto;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  discount?: number;
}
