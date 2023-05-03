"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticModule = void 0;
const common_1 = require("@nestjs/common");
const static_service_1 = require("./static.service");
const static_controller_1 = require("./static.controller");
let StaticModule = class StaticModule {
};
StaticModule = __decorate([
    (0, common_1.Module)({
        providers: [static_service_1.StaticService],
        controllers: [static_controller_1.StaticController]
    })
], StaticModule);
exports.StaticModule = StaticModule;
//# sourceMappingURL=static.module.js.map