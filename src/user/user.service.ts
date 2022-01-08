import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  find(): Promise<any[]> {
    return this.userRepository.find();
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
