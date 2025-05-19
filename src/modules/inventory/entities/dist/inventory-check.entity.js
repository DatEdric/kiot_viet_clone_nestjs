"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventoryCheckEntity = void 0;
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var InventoryCheckEntity = /** @class */ (function () {
    function InventoryCheckEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], InventoryCheckEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'date', name: 'check_date' })
    ], InventoryCheckEntity.prototype, "checkDate");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50 })
    ], InventoryCheckEntity.prototype, "status");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], InventoryCheckEntity.prototype, "notes");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'created_by' })
    ], InventoryCheckEntity.prototype, "createdBy");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], InventoryCheckEntity.prototype, "createdAt");
    InventoryCheckEntity = __decorate([
        typeorm_1.Entity('inventory_check')
    ], InventoryCheckEntity);
    return InventoryCheckEntity;
}());
exports.InventoryCheckEntity = InventoryCheckEntity;
