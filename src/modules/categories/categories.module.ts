import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [UsersModule],
})
export class CategoriesModule {}
