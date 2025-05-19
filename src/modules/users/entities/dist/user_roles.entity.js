"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRoleEntity = void 0;
var role_entity_1 = require("@modules/roles/entities/role.entity");
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var UserRoleEntity = /** @class */ (function () {
    function UserRoleEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], UserRoleEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.userRoles; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'user_id' })
    ], UserRoleEntity.prototype, "user");
    __decorate([
        typeorm_1.ManyToOne(function () { return role_entity_1.RoleEntity; }, function (role) { return role.userRoles; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'role_id' })
    ], UserRoleEntity.prototype, "role");
    UserRoleEntity = __decorate([
        typeorm_1.Entity('user_roles')
    ], UserRoleEntity);
    return UserRoleEntity;
}());
exports.UserRoleEntity = UserRoleEntity;
