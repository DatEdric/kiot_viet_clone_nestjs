"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.OrderItemResponseDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_order_item_dto_1 = require("./create-order-item.dto");
var OrderItemResponseDto = /** @class */ (function (_super) {
    __extends(OrderItemResponseDto, _super);
    function OrderItemResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderItemResponseDto;
}(mapped_types_1.PartialType(create_order_item_dto_1.CreateOrderItemDto)));
exports.OrderItemResponseDto = OrderItemResponseDto;
