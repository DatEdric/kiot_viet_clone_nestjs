import { CategoryStatus } from '@/common/enums';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  parentCategoryId?: number;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsOptional()
  metaTitle?: string;

  @IsString()
  @IsOptional()
  metaDescription?: string;

  @IsEnum(CategoryStatus)
  @IsOptional()
  status?: CategoryStatus;
}
