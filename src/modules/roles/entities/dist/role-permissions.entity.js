"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RolePermissionEntity = void 0;
var permission_entity_1 = require("@modules/permissions/entities/permission.entity");
var role_entity_1 = require("@modules/roles/entities/role.entity");
var typeorm_1 = require("typeorm");
var RolePermissionEntity = /** @class */ (function () {
    function RolePermissionEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], RolePermissionEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return role_entity_1.RoleEntity; }, function (role) { return role.rolePermissions; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'role_id' })
    ], RolePermissionEntity.prototype, "role");
    __decorate([
        typeorm_1.ManyToOne(function () { return permission_entity_1.PermissionEntity; }, function (permission) { return permission.rolePermissions; }, { onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'permission_id' })
    ], RolePermissionEntity.prototype, "permission");
    RolePermissionEntity = __decorate([
        typeorm_1.Entity('role_permissions')
    ], RolePermissionEntity);
    return RolePermissionEntity;
}());
exports.RolePermissionEntity = RolePermissionEntity;
