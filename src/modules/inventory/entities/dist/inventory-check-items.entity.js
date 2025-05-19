"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventoryCheckItemEntity = void 0;
var inventory_check_entity_1 = require("@modules/inventory/entities/inventory-check.entity");
var product_variant_entity_1 = require("@modules/product_variants/entities/product_variant.entity");
var product_entity_1 = require("@modules/products/entities/product.entity");
var typeorm_1 = require("typeorm");
var InventoryCheckItemEntity = /** @class */ (function () {
    function InventoryCheckItemEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], InventoryCheckItemEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return inventory_check_entity_1.InventoryCheckEntity; }, function (inventoryCheck) { return inventoryCheck.items; }, { onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'check_id' })
    ], InventoryCheckItemEntity.prototype, "check");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_entity_1.ProductEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'product_id' })
    ], InventoryCheckItemEntity.prototype, "product");
    __decorate([
        typeorm_1.ManyToOne(function () { return product_variant_entity_1.ProductVariantEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'variant_id' })
    ], InventoryCheckItemEntity.prototype, "variant");
    __decorate([
        typeorm_1.Column({ type: 'int', name: 'expected_quantity' })
    ], InventoryCheckItemEntity.prototype, "expectedQuantity");
    __decorate([
        typeorm_1.Column({ type: 'int', name: 'actual_quantity' })
    ], InventoryCheckItemEntity.prototype, "actualQuantity");
    __decorate([
        typeorm_1.Column({ type: 'int' })
    ], InventoryCheckItemEntity.prototype, "difference");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], InventoryCheckItemEntity.prototype, "notes");
    InventoryCheckItemEntity = __decorate([
        typeorm_1.Entity('inventory_check_items')
    ], InventoryCheckItemEntity);
    return InventoryCheckItemEntity;
}());
exports.InventoryCheckItemEntity = InventoryCheckItemEntity;
