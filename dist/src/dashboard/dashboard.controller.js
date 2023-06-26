"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    getDashboard(params, res, generalName) {
        return this.dashboardService.getDashboard(params, res, generalName);
    }
    postPercents(params, updatePercentsBody) {
        return this.dashboardService.updatePercents(params, updatePercentsBody);
    }
    newConclusion(params, createNoteBody) {
        return this.dashboardService.newNote(params, createNoteBody);
    }
    deleteConclusion(deleteConclusionBody) {
        return this.dashboardService.deleteConclusion(deleteConclusionBody);
    }
};
__decorate([
    (0, common_1.Get)('dashboard/:url/:date'),
    (0, common_1.Render)('dashboard'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Post)('/percentage/:url/:date'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "postPercents", null);
__decorate([
    (0, common_1.Post)('/newconclusion/:url/:date'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "newConclusion", null);
__decorate([
    (0, common_1.Delete)('/deleteconclusion'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "deleteConclusion", null);
DashboardController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map