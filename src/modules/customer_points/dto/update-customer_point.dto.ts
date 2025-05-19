import { PartialType } from '@nestjs/swagger';
import { CreateCustomerPointDto } from './create-customer_point.dto';

export class UpdateCustomerPointDto extends PartialType(
  CreateCustomerPointDto,
) {}
