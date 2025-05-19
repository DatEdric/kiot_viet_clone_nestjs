"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerGroupEntity = void 0;
var typeorm_1 = require("typeorm");
var CustomerGroupEntity = /** @class */ (function () {
    function CustomerGroupEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CustomerGroupEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255 })
    ], CustomerGroupEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ name: 'discount_rate', type: 'float', "default": 0 })
    ], CustomerGroupEntity.prototype, "discountRate");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], CustomerGroupEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'is_active', type: 'boolean', "default": true })
    ], CustomerGroupEntity.prototype, "isActive");
    CustomerGroupEntity = __decorate([
        typeorm_1.Entity('customer_groups')
    ], CustomerGroupEntity);
    return CustomerGroupEntity;
}());
exports.CustomerGroupEntity = CustomerGroupEntity;
