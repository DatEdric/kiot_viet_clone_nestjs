"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductEntity = void 0;
var enums_1 = require("@common/enums");
var brand_entity_1 = require("@modules/brands/entities/brand.entity");
var category_entity_1 = require("@modules/categories/entities/category.entity");
var order_item_entity_1 = require("@modules/order_items/entities/order_item.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var ProductEntity = /** @class */ (function () {
    function ProductEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], ProductEntity.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty()
    ], ProductEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsNotEmpty()
    ], ProductEntity.prototype, "sku");
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        class_validator_1.IsOptional()
    ], ProductEntity.prototype, "description");
    __decorate([
        typeorm_1.ManyToOne(function () { return category_entity_1.CategoryEntity; }, function (category) { return category.products; }),
        typeorm_1.JoinColumn({ name: 'category_id' })
    ], ProductEntity.prototype, "category");
    __decorate([
        typeorm_1.ManyToOne(function () { return brand_entity_1.BrandEntity; }, function (brand) { return brand.products; }, {
            nullable: true
        }),
        typeorm_1.JoinColumn({ name: 'brand_id' })
    ], ProductEntity.prototype, "brand");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'base_price'
        })
    ], ProductEntity.prototype, "basePrice");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'sale_price',
            nullable: true
        }),
        class_validator_1.IsOptional()
    ], ProductEntity.prototype, "salePrice");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'cost_price'
        })
    ], ProductEntity.prototype, "costPrice");
    __decorate([
        typeorm_1.Column({ name: 'stock_quantity' })
    ], ProductEntity.prototype, "stockQuantity");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": enums_1.ProductStatus,
            "default": enums_1.ProductStatus.ACTIVE
        }),
        class_validator_1.IsEnum(enums_1.ProductStatus)
    ], ProductEntity.prototype, "status");
    __decorate([
        typeorm_1.Column('simple-array', { nullable: true }),
        class_validator_1.IsOptional()
    ], ProductEntity.prototype, "images");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], ProductEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' })
    ], ProductEntity.prototype, "updatedAt");
    __decorate([
        typeorm_1.OneToMany(function () { return order_item_entity_1.OrderItemEntity; }, function (orderItem) { return orderItem.product; })
    ], ProductEntity.prototype, "orderItems");
    ProductEntity = __decorate([
        typeorm_1.Entity('products')
    ], ProductEntity);
    return ProductEntity;
}());
exports.ProductEntity = ProductEntity;
