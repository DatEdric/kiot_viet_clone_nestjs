"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductVariantEntity = void 0;
var product_entity_1 = require("@modules/products/entities/product.entity");
var typeorm_1 = require("typeorm");
var ProductVariantEntity = /** @class */ (function () {
    function ProductVariantEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], ProductVariantEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.ProductEntity; }, { nullable: false, onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'product_id' })
    ], ProductVariantEntity.prototype, "product");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100 })
    ], ProductVariantEntity.prototype, "sku");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100, nullable: true })
    ], ProductVariantEntity.prototype, "barcode");
    __decorate([
        typeorm_1.Column({ name: 'variant_name', type: 'varchar', length: 150 })
    ], ProductVariantEntity.prototype, "variantName");
    __decorate([
        typeorm_1.Column({
            name: 'cost_price',
            type: 'decimal',
            precision: 15,
            scale: 2,
            "default": 0
        })
    ], ProductVariantEntity.prototype, "costPrice");
    __decorate([
        typeorm_1.Column({
            name: 'retail_price',
            type: 'decimal',
            precision: 15,
            scale: 2,
            "default": 0
        })
    ], ProductVariantEntity.prototype, "retailPrice");
    __decorate([
        typeorm_1.Column({
            name: 'wholesale_price',
            type: 'decimal',
            precision: 15,
            scale: 2,
            "default": 0
        })
    ], ProductVariantEntity.prototype, "wholesalePrice");
    __decorate([
        typeorm_1.Column({ name: 'is_active', type: 'boolean', "default": true })
    ], ProductVariantEntity.prototype, "isActive");
    ProductVariantEntity = __decorate([
        typeorm_1.Entity('product_variants')
    ], ProductVariantEntity);
    return ProductVariantEntity;
}());
exports.ProductVariantEntity = ProductVariantEntity;
