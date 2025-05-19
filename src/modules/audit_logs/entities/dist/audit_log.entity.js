"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuditLogEntity = void 0;
var user_entity_1 = require("@modules/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var AuditLogEntity = /** @class */ (function () {
    function AuditLogEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], AuditLogEntity.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.auditLogs; }, {
            onDelete: 'SET NULL'
        }),
        typeorm_1.JoinColumn({ name: 'user_id' })
    ], AuditLogEntity.prototype, "user");
    __decorate([
        typeorm_1.Column()
    ], AuditLogEntity.prototype, "action");
    __decorate([
        typeorm_1.Column({ name: 'entity_type' })
    ], AuditLogEntity.prototype, "entityType");
    __decorate([
        typeorm_1.Column({ name: 'entity_id' })
    ], AuditLogEntity.prototype, "entityId");
    __decorate([
        typeorm_1.Column({ type: 'json', name: 'old_values', nullable: true })
    ], AuditLogEntity.prototype, "oldValues");
    __decorate([
        typeorm_1.Column({ type: 'json', name: 'new_values', nullable: true })
    ], AuditLogEntity.prototype, "newValues");
    __decorate([
        typeorm_1.Column({ name: 'ip_address', type: 'varchar', length: 45, nullable: true })
    ], AuditLogEntity.prototype, "ipAddress");
    __decorate([
        typeorm_1.Column({ name: 'user_agent', type: 'text', nullable: true })
    ], AuditLogEntity.prototype, "userAgent");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' })
    ], AuditLogEntity.prototype, "createdAt");
    AuditLogEntity = __decorate([
        typeorm_1.Entity('audit_logs')
    ], AuditLogEntity);
    return AuditLogEntity;
}());
exports.AuditLogEntity = AuditLogEntity;
