"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PurchaseOrderEntity = void 0;
var purchase_order_item_entity_1 = require("@/modules/purchase_order_items/entities/purchase_order_item.entity");
var supplier_entity_1 = require("@modules/suppliers/entities/supplier.entity");
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var PurchaseOrderEntity = /** @class */ (function () {
    function PurchaseOrderEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PurchaseOrderEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return supplier_entity_1.SupplierEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'supplier_id' })
    ], PurchaseOrderEntity.prototype, "supplier");
    __decorate([
        typeorm_1.Column({ name: 'po_number', type: 'varchar', length: 100, unique: true })
    ], PurchaseOrderEntity.prototype, "poNumber");
    __decorate([
        typeorm_1.Column({ name: 'order_date', type: 'date' })
    ], PurchaseOrderEntity.prototype, "orderDate");
    __decorate([
        typeorm_1.Column({ name: 'expected_date', type: 'date', nullable: true })
    ], PurchaseOrderEntity.prototype, "expectedDate");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100 })
    ], PurchaseOrderEntity.prototype, "status");
    __decorate([
        typeorm_1.Column({ name: 'payment_status', type: 'varchar', length: 100 })
    ], PurchaseOrderEntity.prototype, "paymentStatus");
    __decorate([
        typeorm_1.Column({ name: 'total_amount', type: 'decimal', precision: 15, scale: 2 })
    ], PurchaseOrderEntity.prototype, "totalAmount");
    __decorate([
        typeorm_1.Column({ name: 'paid_amount', type: 'decimal', precision: 15, scale: 2 })
    ], PurchaseOrderEntity.prototype, "paidAmount");
    __decorate([
        typeorm_1.Column({ name: 'due_amount', type: 'decimal', precision: 15, scale: 2 })
    ], PurchaseOrderEntity.prototype, "dueAmount");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], PurchaseOrderEntity.prototype, "notes");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }),
        typeorm_1.JoinColumn({ name: 'created_by' })
    ], PurchaseOrderEntity.prototype, "createdBy");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], PurchaseOrderEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.OneToMany(function () { return purchase_order_item_entity_1.PurchaseOrderItemEntity; }, function (item) { return item.purchaseOrder; })
    ], PurchaseOrderEntity.prototype, "items");
    PurchaseOrderEntity = __decorate([
        typeorm_1.Entity('purchase_orders')
    ], PurchaseOrderEntity);
    return PurchaseOrderEntity;
}());
exports.PurchaseOrderEntity = PurchaseOrderEntity;
