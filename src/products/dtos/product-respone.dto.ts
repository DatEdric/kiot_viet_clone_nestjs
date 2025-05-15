import { BrandResponseDto } from '@/brands/dto/brand-respone.dto';
import { CategoryResponseDto } from '@/categories/dtos/category-respone.dto';
import { ProductStatus } from '@/common/enums';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class ProductResponseDto extends PartialType(CreateProductDto) {
  id: number;
  name: string;
  sku: string;
  description?: string;
  category: CategoryResponseDto;
  brand?: BrandResponseDto;
  basePrice: number;
  salePrice?: number;
  costPrice: number;
  stockQuantity: number;
  status: ProductStatus;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
}
