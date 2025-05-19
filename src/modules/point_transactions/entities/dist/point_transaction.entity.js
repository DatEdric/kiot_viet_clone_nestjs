"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PointTransactionEntity = void 0;
var customer_entity_1 = require("@modules/customers/entities/customer.entity");
var order_entity_1 = require("@modules/orders/entities/order.entity");
var typeorm_1 = require("typeorm");
var PointTransactionEntity = /** @class */ (function () {
    function PointTransactionEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PointTransactionEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return customer_entity_1.CustomerEntity; }),
        typeorm_1.JoinColumn({ name: 'customer_id' })
    ], PointTransactionEntity.prototype, "customer");
    __decorate([
        typeorm_1.ManyToOne(function () { return order_entity_1.OrderEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'order_id' })
    ], PointTransactionEntity.prototype, "order");
    __decorate([
        typeorm_1.Column('int')
    ], PointTransactionEntity.prototype, "points");
    __decorate([
        typeorm_1.Column()
    ], PointTransactionEntity.prototype, "type");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], PointTransactionEntity.prototype, "notes");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], PointTransactionEntity.prototype, "createdAt");
    PointTransactionEntity = __decorate([
        typeorm_1.Entity('ypoint_transactions')
    ], PointTransactionEntity);
    return PointTransactionEntity;
}());
exports.PointTransactionEntity = PointTransactionEntity;
