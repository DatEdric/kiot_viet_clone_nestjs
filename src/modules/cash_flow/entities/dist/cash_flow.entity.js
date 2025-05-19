"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CashFlowEntity = exports.CashFlow = void 0;
var CashFlow = /** @class */ (function () {
    function CashFlow() {
    }
    return CashFlow;
}());
exports.CashFlow = CashFlow;
var typeorm_1 = require("typeorm");
var CashFlowEntity = /** @class */ (function () {
    function CashFlowEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CashFlowEntity.prototype, "id");
    __decorate([
        typeorm_1.Column('decimal', { precision: 15, scale: 2 })
    ], CashFlowEntity.prototype, "amount");
    __decorate([
        typeorm_1.Column()
    ], CashFlowEntity.prototype, "type");
    __decorate([
        typeorm_1.Column({ name: 'reference_id', nullable: true })
    ], CashFlowEntity.prototype, "referenceId");
    __decorate([
        typeorm_1.Column({ name: 'reference_type', nullable: true })
    ], CashFlowEntity.prototype, "referenceType");
    __decorate([
        typeorm_1.Column({ name: 'transaction_date', type: 'date' })
    ], CashFlowEntity.prototype, "transactionDate");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], CashFlowEntity.prototype, "notes");
    __decorate([
        typeorm_1.Column({ name: 'created_by' })
    ], CashFlowEntity.prototype, "createdBy");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], CashFlowEntity.prototype, "createdAt");
    CashFlowEntity = __decorate([
        typeorm_1.Entity('cash_flow')
    ], CashFlowEntity);
    return CashFlowEntity;
}());
exports.CashFlowEntity = CashFlowEntity;
