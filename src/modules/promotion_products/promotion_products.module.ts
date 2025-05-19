import { Module } from '@nestjs/common';
import { PromotionProductsService } from './promotion_products.service';
import { PromotionProductsController } from './promotion_products.controller';

@Module({
  controllers: [PromotionProductsController],
  providers: [PromotionProductsService],
})
export class PromotionProductsModule {}
