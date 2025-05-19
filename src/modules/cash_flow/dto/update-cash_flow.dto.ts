import { PartialType } from '@nestjs/swagger';
import { CreateCashFlowDto } from './create-cash_flow.dto';

export class UpdateCashFlowDto extends PartialType(CreateCashFlowDto) {}
