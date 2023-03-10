/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { FeedbacksService } from './feedbacks.service';
import { UrlDto } from 'global.dto';
import { PersonalFeedbacksDto } from './dtos/personal-feedbacks.dto';
import { Response } from 'express';
import { GetNewFeedbackParamDto, createFeedbackBodyDto } from 'src/feedbacks/dtos/new-feedback.dto';
export declare class FeedbacksController {
    private feedbacksService;
    constructor(feedbacksService: FeedbacksService);
    getFeedbacks(params: UrlDto): Promise<{
        cssFileName: string;
        users: (import("mongoose").Document<unknown, any, import("../../models/user.model").User> & import("../../models/user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        url: any;
    }>;
    getPersonalFeedbacks(params: PersonalFeedbacksDto): Promise<{
        cssFileName: string;
        name: any;
        currentUser: import("mongoose").Document<unknown, any, import("../../models/user.model").User> & import("../../models/user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        };
        feedbacks: (import("mongoose").Document<unknown, any, import("../../models/feedback.model").Feedback> & import("../../models/feedback.model").Feedback & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        url: any;
    }>;
    getNewFeedback(params: GetNewFeedbackParamDto): Promise<{
        cssFileName: string;
        name: any;
        currentUser: import("mongoose").Document<unknown, any, import("../../models/user.model").User> & import("../../models/user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        };
        url: any;
        users: (import("mongoose").Document<unknown, any, import("../../models/user.model").User> & import("../../models/user.model").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    createFeedback(files: any, createFeedbackBodyDto: createFeedbackBodyDto, params: GetNewFeedbackParamDto, res: Response): Promise<void>;
}
