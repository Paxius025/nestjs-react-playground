import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from '../SharedModule/constants';
import { User } from 'src/user/entities/user.entity';

interface RequestWithUser extends Request {
  user?: User;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const [, token] = authHeader.split(' ');

    try {
      const payload = this.jwtService.verify<{ sub: number }>(token, {
        secret: jwtConstants.secret,
      });

      const user = await this.userService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      request.user = user; // Attach user to request object
      return true;
    } catch (error) {
      console.log('JWT verification error:', error);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
