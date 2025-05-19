"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExpenseCategoryEntity = void 0;
var typeorm_1 = require("typeorm");
var ExpenseCategoryEntity = /** @class */ (function () {
    function ExpenseCategoryEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], ExpenseCategoryEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], ExpenseCategoryEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], ExpenseCategoryEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'is_active', "default": true })
    ], ExpenseCategoryEntity.prototype, "isActive");
    ExpenseCategoryEntity = __decorate([
        typeorm_1.Entity('expense_categories')
    ], ExpenseCategoryEntity);
    return ExpenseCategoryEntity;
}());
exports.ExpenseCategoryEntity = ExpenseCategoryEntity;
