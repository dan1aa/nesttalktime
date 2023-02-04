import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'models/message.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Message', schema: MessageSchema}])],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
