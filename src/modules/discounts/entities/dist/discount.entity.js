"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DiscountEntity = exports.DiscountType = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var DiscountType;
(function (DiscountType) {
    DiscountType["PERCENTAGE"] = "PERCENTAGE";
    DiscountType["FIXED"] = "FIXED";
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
var DiscountEntity = /** @class */ (function () {
    function DiscountEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], DiscountEntity.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], DiscountEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], DiscountEntity.prototype, "code");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": DiscountType
        }),
        class_validator_1.IsEnum(DiscountType)
    ], DiscountEntity.prototype, "type");
    __decorate([
        typeorm_1.Column('decimal', { precision: 10, scale: 2 }),
        class_validator_1.IsNumber(),
        class_validator_1.Min(0)
    ], DiscountEntity.prototype, "value");
    __decorate([
        typeorm_1.Column('decimal', { name: 'min_order_amount', precision: 10, scale: 2 }),
        class_validator_1.IsNumber(),
        class_validator_1.Min(0)
    ], DiscountEntity.prototype, "minOrderAmount");
    __decorate([
        typeorm_1.Column({ name: 'start_date', type: 'timestamp' }),
        class_validator_1.IsDate()
    ], DiscountEntity.prototype, "startDate");
    __decorate([
        typeorm_1.Column({ name: 'end_date', type: 'timestamp' }),
        class_validator_1.IsDate()
    ], DiscountEntity.prototype, "endDate");
    __decorate([
        typeorm_1.Column({ name: 'is_active', "default": true })
    ], DiscountEntity.prototype, "isActive");
    __decorate([
        typeorm_1.Column({ name: 'usage_limit', type: 'int', nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.Min(0)
    ], DiscountEntity.prototype, "usageLimit");
    __decorate([
        typeorm_1.Column({ name: 'used_count', type: 'int', "default": 0 }),
        class_validator_1.Min(0)
    ], DiscountEntity.prototype, "usedCount");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], DiscountEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' })
    ], DiscountEntity.prototype, "updatedAt");
    DiscountEntity = __decorate([
        typeorm_1.Entity('discounts')
    ], DiscountEntity);
    return DiscountEntity;
}());
exports.DiscountEntity = DiscountEntity;
