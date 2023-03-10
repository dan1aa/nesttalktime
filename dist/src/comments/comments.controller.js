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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_dto_1 = require("./dtos/comments.dto");
const new_comment_dto_1 = require("./dtos/new-comment.dto");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    getComments(params) {
        return this.commentsService.getComments(params);
    }
    newComment(params, newCommentBodyDto, res) {
        return this.commentsService.newComment(params, newCommentBodyDto, res);
    }
};
__decorate([
    (0, common_1.Get)('/:url/:id'),
    (0, common_1.Render)('comments'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_dto_1.CommentsParamsDto]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getComments", null);
__decorate([
    (0, common_1.Post)('/create/:url/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_dto_1.CommentsParamsDto, new_comment_dto_1.NewCommentBodyDto, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "newComment", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map