"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerEntity = exports.Gender = void 0;
var customer_groups_entity_1 = require("@modules/customers/entities/customer-groups.entity");
var user_entity_1 = require("@modules/users/entities/user.entity");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
var CustomerEntity = /** @class */ (function () {
    function CustomerEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CustomerEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.customers; }, { nullable: true }),
        typeorm_1.JoinColumn({ name: 'user_id' })
    ], CustomerEntity.prototype, "user");
    __decorate([
        typeorm_1.Column({ unique: true }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CustomerEntity.prototype, "code");
    __decorate([
        typeorm_1.Column({ name: 'full_name' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CustomerEntity.prototype, "fullName");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsPhoneNumber('VN')
    ], CustomerEntity.prototype, "phone");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsEmail()
    ], CustomerEntity.prototype, "email");
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.IsOptional()
    ], CustomerEntity.prototype, "address");
    __decorate([
        typeorm_1.Column({ name: 'tax_code', nullable: true }),
        class_validator_1.IsOptional()
    ], CustomerEntity.prototype, "taxCode");
    __decorate([
        typeorm_1.ManyToOne(function () { return customer_groups_entity_1.CustomerGroupEntity; }, function (group) { return group.customers; }, {
            nullable: true
        }),
        typeorm_1.JoinColumn({ name: 'customer_group_id' })
    ], CustomerEntity.prototype, "customerGroup");
    __decorate([
        typeorm_1.Column({ type: 'date', nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsDate()
    ], CustomerEntity.prototype, "birthday");
    __decorate([
        typeorm_1.Column({ type: 'enum', "enum": Gender, nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsEnum(Gender)
    ], CustomerEntity.prototype, "gender");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true }),
        class_validator_1.IsOptional()
    ], CustomerEntity.prototype, "notes");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], CustomerEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.Column({ name: 'is_active', "default": true })
    ], CustomerEntity.prototype, "isActive");
    CustomerEntity = __decorate([
        typeorm_1.Entity('customers')
    ], CustomerEntity);
    return CustomerEntity;
}());
exports.CustomerEntity = CustomerEntity;
