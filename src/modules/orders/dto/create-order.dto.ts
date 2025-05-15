import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateOrderItemDto } from '../../order_items/dto/create-order-item.dto';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  @Type(() => CreateOrderItemDto)
  orderItems: CreateOrderItemDto[];

  @IsString()
  @IsNotEmpty()
  shippingAddress: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
