import { PartialType } from '@nestjs/swagger';
import { CreatePromotionProductDto } from './create-promotion_product.dto';

export class UpdatePromotionProductDto extends PartialType(
  CreatePromotionProductDto,
) {}
