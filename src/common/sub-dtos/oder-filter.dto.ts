import { OrderStatus } from '@/common/enums';
import { IsEnum, IsISO8601, IsOptional } from 'class-validator';
import { PaginationQueryDto } from './pagination-query.dto';

export class OrderFilterDto extends PaginationQueryDto {
  @IsISO8601()
  @IsOptional()
  startDate?: string;

  @IsISO8601()
  @IsOptional()
  endDate?: string;

  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
}
