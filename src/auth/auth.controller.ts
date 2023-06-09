import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterAuthDto } from './dto/register-dto';
import { RequestWithUser } from 'src/interfaces/request-with-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './auth-guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: RequestWithUser) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() data: RegisterAuthDto): Promise<Partial<UserEntity>> | null {
    return this.authService.register(data);
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  async profile(@Request() req: RequestWithUser) {
    return this.authService.profile(req.user);
  }
}
