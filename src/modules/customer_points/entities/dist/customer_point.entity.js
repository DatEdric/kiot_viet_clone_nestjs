"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerPointsEntity = void 0;
var customer_entity_1 = require("@modules/customers/entities/customer.entity");
var typeorm_1 = require("typeorm");
var CustomerPointsEntity = /** @class */ (function () {
    function CustomerPointsEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CustomerPointsEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return customer_entity_1.CustomerEntity; }),
        typeorm_1.JoinColumn({ name: 'customer_id' })
    ], CustomerPointsEntity.prototype, "customer");
    __decorate([
        typeorm_1.Column('int', { "default": 0 })
    ], CustomerPointsEntity.prototype, "points");
    __decorate([
        typeorm_1.Column({ name: 'total_earned', type: 'int', "default": 0 })
    ], CustomerPointsEntity.prototype, "totalEarned");
    __decorate([
        typeorm_1.Column({ name: 'total_redeemed', type: 'int', "default": 0 })
    ], CustomerPointsEntity.prototype, "totalRedeemed");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'last_updated' })
    ], CustomerPointsEntity.prototype, "lastUpdated");
    CustomerPointsEntity = __decorate([
        typeorm_1.Entity('customer_points')
    ], CustomerPointsEntity);
    return CustomerPointsEntity;
}());
exports.CustomerPointsEntity = CustomerPointsEntity;
