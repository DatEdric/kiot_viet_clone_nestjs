import { ProductStatus } from '@/common/enums';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsNumber()
  @IsOptional()
  brandId?: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  basePrice: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  salePrice?: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  costPrice: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  stockQuantity: number;

  @IsEnum(ProductStatus)
  @IsOptional()
  status?: ProductStatus = ProductStatus.ACTIVE;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];
}
