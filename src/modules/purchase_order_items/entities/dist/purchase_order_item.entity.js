"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PurchaseOrderItemEntity = void 0;
var product_variant_entity_1 = require("@modules/product_variants/entities/product_variant.entity");
var product_entity_1 = require("@modules/products/entities/product.entity");
var purchase_order_entity_1 = require("@modules/purchase_orders/entities/purchase_order.entity");
var typeorm_1 = require("typeorm");
var PurchaseOrderItemEntity = /** @class */ (function () {
    function PurchaseOrderItemEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PurchaseOrderItemEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return purchase_order_entity_1.PurchaseOrderEntity; }, function (order) { return order.items; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'purchase_order_id' })
    ], PurchaseOrderItemEntity.prototype, "purchaseOrder");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.ProductEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'product_id' })
    ], PurchaseOrderItemEntity.prototype, "product");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_variant_entity_1.ProductVariantEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'variant_id' })
    ], PurchaseOrderItemEntity.prototype, "variant");
    __decorate([
        typeorm_1.Column({ type: 'int' })
    ], PurchaseOrderItemEntity.prototype, "quantity");
    __decorate([
        typeorm_1.Column({ name: 'unit_price', type: 'decimal', precision: 15, scale: 2 })
    ], PurchaseOrderItemEntity.prototype, "unitPrice");
    __decorate([
        typeorm_1.Column({ name: 'received_quantity', type: 'int', "default": 0 })
    ], PurchaseOrderItemEntity.prototype, "receivedQuantity");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100, "default": 'pending' })
    ], PurchaseOrderItemEntity.prototype, "status");
    PurchaseOrderItemEntity = __decorate([
        typeorm_1.Entity('purchase_order_items')
    ], PurchaseOrderItemEntity);
    return PurchaseOrderItemEntity;
}());
exports.PurchaseOrderItemEntity = PurchaseOrderItemEntity;
