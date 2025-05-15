import { OrderStatus } from '@/common/enums';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsEnum(OrderStatus)
  @IsNotEmpty()
  status: OrderStatus;
}
