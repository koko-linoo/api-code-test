import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { UserEntity } from 'src/users/entities/user.entity';
import { RegisterAuthDto } from './dto/register-dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async login(user: Partial<UserEntity>) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async profile(user: Partial<UserEntity>) {
    return this.usersService.findOne(user.id).then((userResponse) => {
      if (userResponse) {
        delete userResponse.password;
        return userResponse;
      }
      throw new NotFoundException();
    })
  }

  async register(user: RegisterAuthDto): Promise<Partial<UserEntity>> {
    return this.usersService.create(user);
  }

  async validateUser(username: string, pass: string): Promise<UserEntity> | null {

    const user = await this.usersService.findByUsername(username);

    if (user && await compare(pass, user.password)) return user;

    return null;
  }
}
