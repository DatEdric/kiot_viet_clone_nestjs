"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductImageEntity = void 0;
var product_variant_entity_1 = require("@modules/product_variants/entities/product_variant.entity");
var product_entity_1 = require("@modules/products/entities/product.entity");
var typeorm_1 = require("typeorm");
var ProductImageEntity = /** @class */ (function () {
    function ProductImageEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], ProductImageEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.ProductEntity; }, { nullable: false, onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'product_id' })
    ], ProductImageEntity.prototype, "product");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_variant_entity_1.ProductVariantEntity; }, {
            nullable: true,
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'variant_id' })
    ], ProductImageEntity.prototype, "variant");
    __decorate([
        typeorm_1.Column({ name: 'image_url', type: 'varchar', length: 255 })
    ], ProductImageEntity.prototype, "imageUrl");
    __decorate([
        typeorm_1.Column({ name: 'sort_order', type: 'int', "default": 0 })
    ], ProductImageEntity.prototype, "sortOrder");
    __decorate([
        typeorm_1.Column({ name: 'is_primary', type: 'boolean', "default": false })
    ], ProductImageEntity.prototype, "isPrimary");
    ProductImageEntity = __decorate([
        typeorm_1.Entity('product_images')
    ], ProductImageEntity);
    return ProductImageEntity;
}());
exports.ProductImageEntity = ProductImageEntity;
