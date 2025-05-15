"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryEntity = void 0;
var enums_1 = require("@/common/enums");
var product_entity_1 = require("@modules/products/entities/product.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var CategoryEntity = /** @class */ (function () {
    function CategoryEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CategoryEntity.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty()
    ], CategoryEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional()
    ], CategoryEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'parent_category_id', nullable: true }),
        class_validator_1.IsOptional()
    ], CategoryEntity.prototype, "parentCategoryId");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty()
    ], CategoryEntity.prototype, "slug");
    __decorate([
        typeorm_1.Column({ name: 'meta_title', nullable: true }),
        class_validator_1.IsOptional()
    ], CategoryEntity.prototype, "metaTitle");
    __decorate([
        typeorm_1.Column({ name: 'meta_description', nullable: true }),
        class_validator_1.IsOptional()
    ], CategoryEntity.prototype, "metaDescription");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": enums_1.CategoryStatus,
            "default": enums_1.CategoryStatus.ACTIVE
        }),
        class_validator_1.IsEnum(enums_1.CategoryStatus)
    ], CategoryEntity.prototype, "status");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], CategoryEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' })
    ], CategoryEntity.prototype, "updatedAt");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.ProductEntity; }, function (product) { return product.category; })
    ], CategoryEntity.prototype, "products");
    CategoryEntity = __decorate([
        typeorm_1.Entity('categories'),
        typeorm_1.Unique(['slug'])
    ], CategoryEntity);
    return CategoryEntity;
}());
exports.CategoryEntity = CategoryEntity;
