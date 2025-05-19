import { PartialType } from '@nestjs/swagger';
import { CreateCustomerGroupDto } from './create-customer_group.dto';

export class UpdateCustomerGroupDto extends PartialType(
  CreateCustomerGroupDto,
) {}
