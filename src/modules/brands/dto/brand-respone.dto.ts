import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

export class BrandResponseDto extends PartialType(CreateBrandDto) {
  id: number;
  name: string;
  description?: string;
  logoUrl?: string;
  website?: string;
  foundedYear?: number;
  country?: string;
  createdAt: Date;
}
