import { CategoryStatus } from '@/common/enums';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class CategoryResponseDto extends PartialType(CreateCategoryDto) {
  id: number;
  name: string;
  description?: string;
  parentCategoryId?: number;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  status: CategoryStatus;
  createdAt: Date;
  updatedAt: Date;
}
