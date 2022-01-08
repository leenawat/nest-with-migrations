import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/user')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/user-manual')
  find(): Promise<any[]> {
    return this.userService.find();
  }

  @Get('/user/:id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('/user')
  save(@Body() user: User): Promise<User> {
    return this.userService.save(user);
  }

  @Put('/user/:id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    const userDb = await this.userService.findOne(id);
    if (!userDb) {
      throw new NotFoundException('user not found');
    }
    return this.userService.save(Object.assign(userDb, user));
  }

  @Delete('/user/:id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.delete(id);
  }
}
