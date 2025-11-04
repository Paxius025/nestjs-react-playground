import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { HashPasswordPipe } from 'src/pipe/hash-password-pipe';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { User } from './entities/user.entity';

// RBAC: Role-Based Access Control
import { Roles } from 'src/decorators/decorators';
import { RolesGuard } from 'src/guard/roles.guard';

interface RequestWithUser extends Request {
  user?: User;
}

@ApiBearerAuth('jwt')
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    console.log('UserController initialized');
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'The user has been created.' })
  create(@Body(new HashPasswordPipe()) dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully.',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get('profile')
  findOne(@Request() req: RequestWithUser) {
    const user = req.user;
    return user;
  }

  @Patch()
  @ApiBody({ type: UpdateUserDto })
  update(@Body(new HashPasswordPipe()) dto: UpdateUserDto) {
    return this.userService.update(dto.user_id, dto);
  }

  @Delete(':user_id')
  @UseGuards(RolesGuard)
  @Roles('Admin')
  remove(@Param('user_id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
