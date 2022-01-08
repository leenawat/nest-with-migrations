import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectConnection('default') private connection: Connection,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  find(): Promise<any[]> {
    return this.connection.query('select * from user');
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
