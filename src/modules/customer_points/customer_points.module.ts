import { Module } from '@nestjs/common';
import { CustomerPointsService } from './customer_points.service';
import { CustomerPointsController } from './customer_points.controller';

@Module({
  controllers: [CustomerPointsController],
  providers: [CustomerPointsService],
})
export class CustomerPointsModule {}
