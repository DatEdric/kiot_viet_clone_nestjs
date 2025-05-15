import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl()
  @IsOptional()
  logoUrl?: string;

  @IsUrl()
  @IsOptional()
  website?: string;

  @IsNumber()
  @IsOptional()
  foundedYear?: number;

  @IsString()
  @IsOptional()
  country?: string;
}
