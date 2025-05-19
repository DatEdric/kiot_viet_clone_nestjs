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
import { SuppliersModule } from './suppliers/suppliers.module';
import { SuppliersnestModule } from './g/suppliersnest/suppliersnest.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { CustomersModule } from './modules/customers/customers.module';
import { DiscountsModule } from './modules/discounts/discounts.module';
import { PromotionsModule } from './modules/promotions/promotions.module';
import { PromotionProductsModule } from './modules/promotion_products/promotion_products.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AuditLogsModule } from './modules/audit_logs/audit_logs.module';
import { ReportsModule } from './modules/reports/reports.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { PaymentMethodsModule } from './modules/payment_methods/payment_methods.module';
import { ExpenseCategoriesModule } from './modules/expense_categories/expense_categories.module';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { CashFlowModule } from './modules/cash_flow/cash_flow.module';
import { PointTransactionsModule } from './modules/point_transactions/point_transactions.module';
import { CustomerPointsModule } from './modules/customer_points/customer_points.module';
import { CustomerGroupsModule } from './modules/customer_groups/customer_groups.module';
import { PurchaseOrderItemsModule } from './modules/purchase_order_items/purchase_order_items.module';
import { PurchaseOrdersModule } from './modules/purchase_orders/purchase_orders.module';
import { ProductImagesModule } from './modules/product_images/product_images.module';
import { ProductVariantsModule } from './modules/product_variants/product_variants.module';
import { VariantAttributesModule } from './modules/variant_attributes/variant_attributes.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { InventoryTransactionsModule } from './modules/inventory_transactions/inventory_transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    CategoriesModule,
    ProductsModule,
    UsersModule,
    BrandsModule,
    OrdersModule,
    OrderItemsModule,
    SuppliersModule,
    SuppliersnestModule,
    CustomersModule,
    DiscountsModule,
    PromotionsModule,
    PromotionProductsModule,
    RolesModule,
    PermissionsModule,
    NotificationsModule,
    AuditLogsModule,
    ReportsModule,
    PaymentsModule,
    PaymentMethodsModule,
    ExpenseCategoriesModule,
    ExpensesModule,
    CashFlowModule,
    PointTransactionsModule,
    CustomerPointsModule,
    CustomerGroupsModule,
    PurchaseOrderItemsModule,
    PurchaseOrdersModule,
    ProductImagesModule,
    ProductVariantsModule,
    VariantAttributesModule,
    WarehousesModule,
    InventoryModule,
    InventoryTransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
