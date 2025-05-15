"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateOrderDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var create_order_item_dto_1 = require("../../order_items/dto/create-order-item.dto");
var CreateOrderDto = /** @class */ (function () {
    function CreateOrderDto() {
    }
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Type(function () { return create_order_item_dto_1.CreateOrderItemDto; })
    ], CreateOrderDto.prototype, "orderItems");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateOrderDto.prototype, "shippingAddress");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateOrderDto.prototype, "paymentMethod");
    return CreateOrderDto;
}());
exports.CreateOrderDto = CreateOrderDto;
