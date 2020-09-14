import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private _repos: UserRepository,
  ) {}

  async getUserById(id: string): Promise<UserEntity> {
    const foundUser = await this._repos.findOne({ id });
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  async createUser(data: CreateUserDTO): Promise<UserEntity> {
    const user = await this._repos.create(data);
    return await user.save();
  }

  async updateUser(userId: string, data: UpdateUserDTO): Promise<UserEntity> {
    const user = await this.getUserById(userId);
    Object.keys(data).forEach((key: string) => {
      user[key] = data[key];
    });
    return await user.save();
  }
}
