"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentEntity = void 0;
var payment_method_entity_1 = require("@modules/payment_methods/entities/payment_method.entity");
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var PaymentEntity = /** @class */ (function () {
    function PaymentEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PaymentEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ name: 'reference_id' })
    ], PaymentEntity.prototype, "referenceId");
    __decorate([
        typeorm_1.Column({ name: 'reference_type', length: 50 })
    ], PaymentEntity.prototype, "referenceType");
    __decorate([
        typeorm_1.ManyToOne(function () { return payment_method_entity_1.PaymentMethodEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'payment_method_id' })
    ], PaymentEntity.prototype, "paymentMethod");
    __decorate([
        typeorm_1.Column('decimal', { precision: 15, scale: 2 })
    ], PaymentEntity.prototype, "amount");
    __decorate([
        typeorm_1.Column({ length: 50 })
    ], PaymentEntity.prototype, "status");
    __decorate([
        typeorm_1.Column({ name: 'transaction_id', length: 100, nullable: true })
    ], PaymentEntity.prototype, "transactionId");
    __decorate([
        typeorm_1.Column({ name: 'payment_date', type: 'timestamp', nullable: true })
    ], PaymentEntity.prototype, "paymentDate");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], PaymentEntity.prototype, "notes");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'created_by' })
    ], PaymentEntity.prototype, "createdBy");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], PaymentEntity.prototype, "createdAt");
    PaymentEntity = __decorate([
        typeorm_1.Entity('payments')
    ], PaymentEntity);
    return PaymentEntity;
}());
exports.PaymentEntity = PaymentEntity;
