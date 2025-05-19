"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PromotionEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var PromotionEntity = /** @class */ (function () {
    function PromotionEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PromotionEntity.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], PromotionEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], PromotionEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'start_date', type: 'timestamp' }),
        class_validator_1.IsDate()
    ], PromotionEntity.prototype, "startDate");
    __decorate([
        typeorm_1.Column({ name: 'end_date', type: 'timestamp' }),
        class_validator_1.IsDate()
    ], PromotionEntity.prototype, "endDate");
    __decorate([
        typeorm_1.Column({ name: 'is_active', "default": true }),
        class_validator_1.IsBoolean()
    ], PromotionEntity.prototype, "isActive");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], PromotionEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' })
    ], PromotionEntity.prototype, "updatedAt");
    PromotionEntity = __decorate([
        typeorm_1.Entity('promotions')
    ], PromotionEntity);
    return PromotionEntity;
}());
exports.PromotionEntity = PromotionEntity;
