import { AppDataSource } from '@database/data-source';
import { BrandsModule } from '@modules/brands/brands.module';
import { CategoriesModule } from '@modules/categories/categories.module';
import { OrderItemsModule } from '@modules/order_items/order_items.module';
import { OrdersModule } from '@modules/orders/orders.module';
import { ProductsModule } from '@modules/products/products.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    CategoriesModule,
    ProductsModule,
    UsersModule,
    BrandsModule,
    OrdersModule,
    OrderItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
