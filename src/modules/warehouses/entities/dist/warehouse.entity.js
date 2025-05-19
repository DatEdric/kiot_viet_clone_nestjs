"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WarehouseEntity = void 0;
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var WarehouseEntity = /** @class */ (function () {
    function WarehouseEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], WarehouseEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 150 })
    ], WarehouseEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255 })
    ], WarehouseEntity.prototype, "address");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 20, nullable: true })
    ], WarehouseEntity.prototype, "phone");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'manager_id' })
    ], WarehouseEntity.prototype, "manager");
    __decorate([
        typeorm_1.Column({ type: 'boolean', "default": true })
    ], WarehouseEntity.prototype, "status");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], WarehouseEntity.prototype, "createdAt");
    WarehouseEntity = __decorate([
        typeorm_1.Entity('warehouses')
    ], WarehouseEntity);
    return WarehouseEntity;
}());
exports.WarehouseEntity = WarehouseEntity;
