import { Injectable } from '@nestjs/common';
import { CreatePromotionProductDto } from './dto/create-promotion_product.dto';
import { UpdatePromotionProductDto } from './dto/update-promotion_product.dto';

@Injectable()
export class PromotionProductsService {
  create(createPromotionProductDto: CreatePromotionProductDto) {
    return 'This action adds a new promotionProduct';
  }

  findAll() {
    return `This action returns all promotionProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promotionProduct`;
  }

  update(id: number, updatePromotionProductDto: UpdatePromotionProductDto) {
    return `This action updates a #${id} promotionProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotionProduct`;
  }
}
