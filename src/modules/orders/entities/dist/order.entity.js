"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderEntity = void 0;
var enums_1 = require("@/common/enums");
var customer_entity_1 = require("@modules/customers/entities/customer.entity"); // Đảm bảo bạn có entity này
var order_item_entity_1 = require("@modules/order_items/entities/order_item.entity");
var user_entity_1 = require("@modules/users/entities/user.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var OrderEntity = /** @class */ (function () {
    function OrderEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], OrderEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ name: 'order_number', unique: true }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], OrderEntity.prototype, "orderNumber");
    __decorate([
        typeorm_1.ManyToOne(function () { return customer_entity_1.CustomerEntity; }, function (customer) { return customer.orders; }, {
            nullable: true
        }),
        typeorm_1.JoinColumn({ name: 'customer_id' })
    ], OrderEntity.prototype, "customer");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.orders; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'seller_id' })
    ], OrderEntity.prototype, "seller");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.ordersPlaced; }),
        typeorm_1.JoinColumn({ name: 'user_id' })
    ], OrderEntity.prototype, "user");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'sub_total'
        }),
        class_validator_1.IsNumber()
    ], OrderEntity.prototype, "subTotal");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'discount_amount',
            nullable: true
        }),
        class_validator_1.IsOptional()
    ], OrderEntity.prototype, "discountAmount");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'tax_amount',
            nullable: true
        }),
        class_validator_1.IsOptional()
    ], OrderEntity.prototype, "taxAmount");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'shipping_amount',
            nullable: true
        }),
        class_validator_1.IsOptional()
    ], OrderEntity.prototype, "shippingAmount");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'grand_total'
        }),
        class_validator_1.IsNumber()
    ], OrderEntity.prototype, "grandTotal");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'paid_amount',
            "default": 0
        })
    ], OrderEntity.prototype, "paidAmount");
    __decorate([
        typeorm_1.Column('decimal', {
            precision: 10,
            scale: 2,
            name: 'due_amount',
            "default": 0
        })
    ], OrderEntity.prototype, "dueAmount");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": enums_1.OrderStatus,
            "default": enums_1.OrderStatus.PENDING
        }),
        class_validator_1.IsEnum(enums_1.OrderStatus)
    ], OrderEntity.prototype, "status");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": enums_1.PaymentStatus,
            name: 'payment_status',
            "default": enums_1.PaymentStatus.UNPAID
        }),
        class_validator_1.IsEnum(enums_1.PaymentStatus)
    ], OrderEntity.prototype, "paymentStatus");
    __decorate([
        typeorm_1.Column({ name: 'payment_method' }),
        class_validator_1.IsNotEmpty()
    ], OrderEntity.prototype, "paymentMethod");
    __decorate([
        typeorm_1.Column({ name: 'shipping_address' }),
        class_validator_1.IsNotEmpty()
    ], OrderEntity.prototype, "shippingAddress");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": enums_1.OrderSource,
            "default": enums_1.OrderSource.STORE
        }),
        class_validator_1.IsEnum(enums_1.OrderSource)
    ], OrderEntity.prototype, "source");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true }),
        class_validator_1.IsOptional()
    ], OrderEntity.prototype, "notes");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], OrderEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' })
    ], OrderEntity.prototype, "updatedAt");
    __decorate([
        typeorm_1.OneToMany(function () { return order_item_entity_1.OrderItemEntity; }, function (orderItem) { return orderItem.order; })
    ], OrderEntity.prototype, "orderItems");
    OrderEntity = __decorate([
        typeorm_1.Entity('orders')
    ], OrderEntity);
    return OrderEntity;
}());
exports.OrderEntity = OrderEntity;
