import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { CreateOrderItemDto } from './create-order-item.dto';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  quantity: number;
}
