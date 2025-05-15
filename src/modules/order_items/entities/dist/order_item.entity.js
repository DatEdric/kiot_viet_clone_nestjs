"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderItemEntity = void 0;
var order_entity_1 = require("@modules/orders/entities/order.entity");
var product_entity_1 = require("@modules/products/entities/product.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var OrderItemEntity = /** @class */ (function () {
    function OrderItemEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], OrderItemEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return order_entity_1.OrderEntity; }, function (order) { return order.orderItems; }),
        typeorm_1.JoinColumn({ name: 'order_id' })
    ], OrderItemEntity.prototype, "order");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.ProductEntity; }, function (product) { return product.orderItems; }),
        typeorm_1.JoinColumn({ name: 'product_id' })
    ], OrderItemEntity.prototype, "product");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty()
    ], OrderItemEntity.prototype, "quantity");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'unit_price'
        })
    ], OrderItemEntity.prototype, "unitPrice");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'total_price'
        })
    ], OrderItemEntity.prototype, "totalPrice");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            nullable: true
        }),
        class_validator_1.IsOptional()
    ], OrderItemEntity.prototype, "discount");
    OrderItemEntity = __decorate([
        typeorm_1.Entity('orders_items')
    ], OrderItemEntity);
    return OrderItemEntity;
}());
exports.OrderItemEntity = OrderItemEntity;
