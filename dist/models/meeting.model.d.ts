import * as mongoose from 'mongoose';
import { FilteredMeeting } from 'types/types';
export declare const MeetingSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    meetings: any[];
    name?: string;
}>;
export interface Meeting {
    name: string;
    meetings: FilteredMeeting[];
}
