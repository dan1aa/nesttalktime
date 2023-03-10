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
exports.FeedbacksController = void 0;
const common_1 = require("@nestjs/common");
const feedbacks_service_1 = require("./feedbacks.service");
const global_dto_1 = require("../../global.dto");
const personal_feedbacks_dto_1 = require("./dtos/personal-feedbacks.dto");
const path_1 = require("path");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const new_feedback_dto_1 = require("./dtos/new-feedback.dto");
let FeedbacksController = class FeedbacksController {
    constructor(feedbacksService) {
        this.feedbacksService = feedbacksService;
    }
    getFeedbacks(params) {
        return this.feedbacksService.getFeedbacks(params);
    }
    getPersonalFeedbacks(params) {
        return this.feedbacksService.getPersonalFeedbacks(params);
    }
    getNewFeedback(params) {
        return this.feedbacksService.getNewFeedback(params);
    }
    createFeedback(files, createFeedbackBodyDto, params, res) {
        return this.feedbacksService.createFeedback(files, createFeedbackBodyDto, params, res);
    }
};
__decorate([
    (0, common_1.Get)('/:url'),
    (0, common_1.Render)('feedbacks'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [global_dto_1.UrlDto]),
    __metadata("design:returntype", void 0)
], FeedbacksController.prototype, "getFeedbacks", null);
__decorate([
    (0, common_1.Get)('/:url/:name'),
    (0, common_1.Render)('personal-feedbacks'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [personal_feedbacks_dto_1.PersonalFeedbacksDto]),
    __metadata("design:returntype", void 0)
], FeedbacksController.prototype, "getPersonalFeedbacks", null);
__decorate([
    (0, common_1.Get)('/create/:url/:name'),
    (0, common_1.Render)('new-feedback'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_feedback_dto_1.GetNewFeedbackParamDto]),
    __metadata("design:returntype", void 0)
], FeedbacksController.prototype, "getNewFeedback", null);
__decorate([
    (0, common_1.Post)('/create/:url/:name'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file', 20, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, done) {
                done(null, Date.now() + (0, path_1.extname)(file.originalname));
            }
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, new_feedback_dto_1.createFeedbackBodyDto, new_feedback_dto_1.GetNewFeedbackParamDto, Object]),
    __metadata("design:returntype", void 0)
], FeedbacksController.prototype, "createFeedback", null);
FeedbacksController = __decorate([
    (0, common_1.Controller)('feedbacks'),
    __metadata("design:paramtypes", [feedbacks_service_1.FeedbacksService])
], FeedbacksController);
exports.FeedbacksController = FeedbacksController;
//# sourceMappingURL=feedbacks.controller.js.map