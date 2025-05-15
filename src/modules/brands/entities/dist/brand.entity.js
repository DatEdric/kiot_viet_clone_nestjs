"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrandEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var product_entity_1 = require("../../products/entities/product.entity");
var BrandEntity = /** @class */ (function () {
    function BrandEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], BrandEntity.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty()
    ], BrandEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional()
    ], BrandEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'logo_url', nullable: true }),
        class_validator_1.IsOptional()
    ], BrandEntity.prototype, "logoUrl");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional()
    ], BrandEntity.prototype, "website");
    __decorate([
        typeorm_1.Column({ name: 'founded_year', nullable: true }),
        class_validator_1.IsOptional()
    ], BrandEntity.prototype, "foundedYear");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional()
    ], BrandEntity.prototype, "country");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], BrandEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.ProductEntity; }, function (product) { return product.brand; })
    ], BrandEntity.prototype, "products");
    BrandEntity = __decorate([
        typeorm_1.Entity('brands')
    ], BrandEntity);
    return BrandEntity;
}());
exports.BrandEntity = BrandEntity;
