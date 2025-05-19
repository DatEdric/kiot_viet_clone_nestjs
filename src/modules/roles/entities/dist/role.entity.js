"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoleEntity = void 0;
var user_roles_entity_1 = require("@modules/users/entities/user_roles.entity");
var typeorm_1 = require("typeorm");
var RoleEntity = /** @class */ (function () {
    function RoleEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], RoleEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], RoleEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: true })
    ], RoleEntity.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: 'is_system', "default": false })
    ], RoleEntity.prototype, "isSystem");
    __decorate([
        typeorm_1.OneToMany(function () { return user_roles_entity_1.UserRoleEntity; }, function (userRole) { return userRole.role; })
    ], RoleEntity.prototype, "userRoles");
    RoleEntity = __decorate([
        typeorm_1.Entity('roles')
    ], RoleEntity);
    return RoleEntity;
}());
exports.RoleEntity = RoleEntity;
