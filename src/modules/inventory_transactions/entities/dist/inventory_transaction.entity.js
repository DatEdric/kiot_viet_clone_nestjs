"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventoryTransactionEntity = exports.InventoryTransaction = void 0;
var InventoryTransaction = /** @class */ (function () {
    function InventoryTransaction() {
    }
    return InventoryTransaction;
}());
exports.InventoryTransaction = InventoryTransaction;
var product_variant_entity_1 = require("@modules/product_variants/entities/product_variant.entity");
var product_entity_1 = require("@modules/products/entities/product.entity");
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var InventoryTransactionEntity = /** @class */ (function () {
    function InventoryTransactionEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], InventoryTransactionEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.ProductEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'product_id' })
    ], InventoryTransactionEntity.prototype, "product");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_variant_entity_1.ProductVariantEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'variant_id' })
    ], InventoryTransactionEntity.prototype, "variant");
    __decorate([
        typeorm_1.Column({ type: 'int' })
    ], InventoryTransactionEntity.prototype, "quantity");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50 })
    ], InventoryTransactionEntity.prototype, "type");
    __decorate([
        typeorm_1.Column({ type: 'int', nullable: true })
    ], InventoryTransactionEntity.prototype, "reference_id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50, nullable: true })
    ], InventoryTransactionEntity.prototype, "reference_type");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
    ], InventoryTransactionEntity.prototype, "cost_price");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], InventoryTransactionEntity.prototype, "notes");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'created_by' })
    ], InventoryTransactionEntity.prototype, "createdBy");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], InventoryTransactionEntity.prototype, "createdAt");
    InventoryTransactionEntity = __decorate([
        typeorm_1.Entity('inventory_transactions')
    ], InventoryTransactionEntity);
    return InventoryTransactionEntity;
}());
exports.InventoryTransactionEntity = InventoryTransactionEntity;
