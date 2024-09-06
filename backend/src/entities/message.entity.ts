import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Room } from './room.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  timestamp: Date;

  @ManyToOne(() => User, (user) => user.messages)
  user: User;

  @ManyToOne(() => Room, (room) => room.messages)
  room: Room;
}
