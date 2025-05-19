import { Module } from '@nestjs/common';
import { PointTransactionsService } from './point_transactions.service';
import { PointTransactionsController } from './point_transactions.controller';

@Module({
  controllers: [PointTransactionsController],
  providers: [PointTransactionsService],
})
export class PointTransactionsModule {}
