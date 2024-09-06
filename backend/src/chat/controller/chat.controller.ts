import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChatService } from '../service/chat.service';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post('rooms')
  createRoom(@Body('name') name: string) {
    return this.chatService.createRoom(name);
  }

  @Post('message')
  sendMessage(
    @Body('userId') userId: number,
    @Body('roomId') roomId: number,
    @Body('content') content: string,
  ) {
    return this.chatService.sendMessage(userId, roomId, content);
  }

  @Get('rooms/:roomId/messages')
  getMessages(@Param('roomId') roomId: number) {
    return this.chatService.getMessages(roomId);
  }
}
