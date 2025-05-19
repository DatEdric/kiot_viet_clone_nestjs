"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExpenseEntity = void 0;
var expense_category_entity_1 = require("@modules/expense_categories/entities/expense_category.entity");
var payment_method_entity_1 = require("@modules/payment_methods/entities/payment_method.entity");
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var ExpenseEntity = /** @class */ (function () {
    function ExpenseEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], ExpenseEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return expense_category_entity_1.ExpenseCategoryEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'expense_category_id' })
    ], ExpenseEntity.prototype, "expenseCategory");
    __decorate([
        typeorm_1.Column('decimal', { precision: 15, scale: 2 })
    ], ExpenseEntity.prototype, "amount");
    __decorate([
        typeorm_1.ManyToOne(function () { return payment_method_entity_1.PaymentMethodEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'payment_method_id' })
    ], ExpenseEntity.prototype, "paymentMethod");
    __decorate([
        typeorm_1.Column({ type: 'date', name: 'expense_date' })
    ], ExpenseEntity.prototype, "expenseDate");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], ExpenseEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'reference_document', nullable: true })
    ], ExpenseEntity.prototype, "referenceDocument");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'created_by' })
    ], ExpenseEntity.prototype, "createdBy");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], ExpenseEntity.prototype, "createdAt");
    ExpenseEntity = __decorate([
        typeorm_1.Entity('expenses')
    ], ExpenseEntity);
    return ExpenseEntity;
}());
exports.ExpenseEntity = ExpenseEntity;
