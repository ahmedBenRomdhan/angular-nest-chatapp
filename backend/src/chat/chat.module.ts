import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatService } from './service/chat.service';
import { ChatController } from './controller/chat.controller';
import { Message } from '../entities/message.entity';
import { Room } from '../entities/room.entity';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Room, User])],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
