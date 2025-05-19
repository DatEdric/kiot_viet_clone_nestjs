"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentMethodEntity = void 0;
var typeorm_1 = require("typeorm");
var PaymentMethodEntity = /** @class */ (function () {
    function PaymentMethodEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PaymentMethodEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], PaymentMethodEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], PaymentMethodEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'is_active', "default": true })
    ], PaymentMethodEntity.prototype, "isActive");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], PaymentMethodEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' })
    ], PaymentMethodEntity.prototype, "updatedAt");
    PaymentMethodEntity = __decorate([
        typeorm_1.Entity('payment_methods')
    ], PaymentMethodEntity);
    return PaymentMethodEntity;
}());
exports.PaymentMethodEntity = PaymentMethodEntity;
