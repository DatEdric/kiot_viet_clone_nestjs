"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var enums_1 = require("@/common/enums");
var order_entity_1 = require("@modules/orders/entities/order.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], UserEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsNotEmpty()
    ], UserEntity.prototype, "username");
    __decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsEmail()
    ], UserEntity.prototype, "email");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty()
    ], UserEntity.prototype, "password");
    __decorate([
        typeorm_1.Column({ name: 'full_name', nullable: true }),
        class_validator_1.IsOptional()
    ], UserEntity.prototype, "fullName");
    __decorate([
        typeorm_1.Column({ name: 'phone_number', nullable: true }),
        class_validator_1.IsOptional()
    ], UserEntity.prototype, "phoneNumber");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional()
    ], UserEntity.prototype, "address");
    __decorate([
        typeorm_1.Column({ type: 'enum', "enum": enums_1.UserRole, "default": enums_1.UserRole.CUSTOMER }),
        class_validator_1.IsEnum(enums_1.UserRole)
    ], UserEntity.prototype, "role");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], UserEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.Column({ name: 'last_login', nullable: true })
    ], UserEntity.prototype, "lastLogin");
    __decorate([
        typeorm_1.OneToMany(function () { return order_entity_1.OrderEntity; }, function (order) { return order.user; })
    ], UserEntity.prototype, "orders");
    UserEntity = __decorate([
        typeorm_1.Entity('users')
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
