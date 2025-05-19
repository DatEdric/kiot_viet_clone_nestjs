"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PromotionProductEntity = exports.DiscountType = void 0;
var product_entity_1 = require("@modules/products/entities/product.entity");
var promotion_entity_1 = require("@modules/promotions/entities/promotion.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var DiscountType;
(function (DiscountType) {
    DiscountType["PERCENTAGE"] = "percentage";
    DiscountType["FIXED"] = "fixed";
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
var PromotionProductEntity = /** @class */ (function () {
    function PromotionProductEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PromotionProductEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return promotion_entity_1.PromotionEntity; }, function (promotion) { return promotion.id; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'promotion_id' })
    ], PromotionProductEntity.prototype, "promotion");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.ProductEntity; }, function (product) { return product.id; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'product_id' })
    ], PromotionProductEntity.prototype, "product");
    __decorate([
        typeorm_1.Column({ name: 'discount_type', type: 'enum', "enum": DiscountType }),
        class_validator_1.IsEnum(DiscountType)
    ], PromotionProductEntity.prototype, "discountType");
    __decorate([
        typeorm_1.Column({ name: 'discount_value', type: 'decimal', precision: 10, scale: 2 }),
        class_validator_1.IsNumber()
    ], PromotionProductEntity.prototype, "discountValue");
    PromotionProductEntity = __decorate([
        typeorm_1.Entity('promotion_products')
    ], PromotionProductEntity);
    return PromotionProductEntity;
}());
exports.PromotionProductEntity = PromotionProductEntity;
