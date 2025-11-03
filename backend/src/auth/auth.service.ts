import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import bcrypt from 'node_modules/bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByUsernameOrEmail(
      signInDto.usernameOrEmail,
    );

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      signInDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.user_id };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const access_token: string = this.jwtService.sign(payload);

    return {
      access_token,
    };
  }

  async signUp(createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto);
    return newUser;
  }
}
