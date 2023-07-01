import { Body, Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterAuthDto } from './dto/register-dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './auth-guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SignInAuthDto, SignInAuthResponseDto } from './dto/sign-in-auth.dto';
import { RequestWithUser } from 'src/common/types';
import { TransformInterceptor } from 'src/interceptors/transform-interceptor';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @ApiBody({
    type: SignInAuthDto,
  })
  @ApiOkResponse({
    type: SignInAuthResponseDto,
  })
  async login(@Request() req: RequestWithUser): Promise<SignInAuthResponseDto> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() data: RegisterAuthDto): Promise<Partial<UserEntity>> | null {
    return this.authService.register(data);
  }

  @Get("profile")
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(new TransformInterceptor(UserEntity))
  async profile(@Request() req: RequestWithUser) {
    return this.authService.profile(req.user);
  }
}
