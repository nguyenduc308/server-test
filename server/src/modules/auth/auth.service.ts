import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private _userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateCredentials(email: string, password: string): Promise<any> {
    const user = await this._userRepo.findOne({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return user;
  }

  login(user: any): any {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
