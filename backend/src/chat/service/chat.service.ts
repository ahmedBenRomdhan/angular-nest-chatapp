import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../../entities/message.entity';
import { Room } from '../../entities/room.entity';
import { User } from '../../entities/user.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Message) private messageRepo: Repository<Message>,
    @InjectRepository(Room) private roomRepo: Repository<Room>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async createRoom(name: string): Promise<Room> {
    const room = this.roomRepo.create({ name });
    return this.roomRepo.save(room);
  }

  async sendMessage(
    userId: number,
    roomId: number,
    content: string,
  ): Promise<Message> {
    const user = await this.userRepo.findOneBy({ id: userId });
    const room = await this.roomRepo.findOneBy({ id: roomId });
    const message = this.messageRepo.create({ user, room, content });
    return this.messageRepo.save(message);
  }

  async getMessages(roomId: number): Promise<Message[]> {
    return this.messageRepo.find({
      where: { room: { id: roomId } },
      relations: ['user'],
    });
  }
}
