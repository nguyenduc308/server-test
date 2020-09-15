import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from '../user/user.dto';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private _userRepo: UserRepository,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateCredentials(email: string, password: string): Promise<any> {
    const user = await this._userRepo.findOne({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (isPasswordMatched) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: any): any {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(data: CreateUserDTO) {
    const { password, ...result } = await this.userService.createUser(data);
    return result;
  }
}
