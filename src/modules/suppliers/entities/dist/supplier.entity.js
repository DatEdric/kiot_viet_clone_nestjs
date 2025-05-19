"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupplierEntity = void 0;
var product_entity_1 = require("@modules/products/entities/product.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var SupplierEntity = /** @class */ (function () {
    function SupplierEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], SupplierEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], SupplierEntity.prototype, "code");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], SupplierEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ name: 'contact_person', nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], SupplierEntity.prototype, "contactPerson");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], SupplierEntity.prototype, "phone");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsEmail()
    ], SupplierEntity.prototype, "email");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], SupplierEntity.prototype, "address");
    __decorate([
        typeorm_1.Column({ name: 'tax_code', nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], SupplierEntity.prototype, "taxCode");
    __decorate([
        typeorm_1.Column({ name: 'payment_terms', nullable: true, type: 'text' }),
        class_validator_1.IsOptional()
    ], SupplierEntity.prototype, "paymentTerms");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true }),
        class_validator_1.IsOptional()
    ], SupplierEntity.prototype, "notes");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], SupplierEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.Column({ name: 'is_active', "default": true }),
        class_validator_1.IsBoolean()
    ], SupplierEntity.prototype, "isActive");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.ProductEntity; }, function (product) { return product.supplier; })
    ], SupplierEntity.prototype, "products");
    SupplierEntity = __decorate([
        typeorm_1.Entity('suppliers')
    ], SupplierEntity);
    return SupplierEntity;
}());
exports.SupplierEntity = SupplierEntity;
