"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = require("@nestjs/common");
const profile_service_1 = require("./profile.service");
const profile_controller_1 = require("./profile.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("../../models/user.model");
const feedback_model_1 = require("../../models/feedback.model");
const meeting_model_1 = require("../../models/meeting.model");
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    (0, common_1.Module)({
        providers: [profile_service_1.ProfileService],
        controllers: [profile_controller_1.ProfileController],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_model_1.UserSchema }, { name: 'Feedback', schema: feedback_model_1.FeedbackSchema }, { name: 'Meeting', schema: meeting_model_1.MeetingSchema }])]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map