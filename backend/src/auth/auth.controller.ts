import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin-auth.dto';
import { HashPasswordPipe } from 'src/pipe/hash-password-pipe';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('signup')
  async signUp(@Body(new HashPasswordPipe()) createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }
}
