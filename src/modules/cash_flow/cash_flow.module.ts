import { Module } from '@nestjs/common';
import { CashFlowService } from './cash_flow.service';
import { CashFlowController } from './cash_flow.controller';

@Module({
  controllers: [CashFlowController],
  providers: [CashFlowService],
})
export class CashFlowModule {}
