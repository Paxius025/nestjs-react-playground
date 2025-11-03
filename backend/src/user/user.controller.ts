import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { HashPasswordPipe } from 'src/pipe/hash-password-pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    console.log('UserController initialized');
  }

  @Post()
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

  @Get(':user_id')
  findOne(@Param('user_id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':user_id')
  update(
    @Param('user_id', ParseIntPipe) id: number,
    @Body(new HashPasswordPipe()) dto: UpdateUserDto,
  ) {
    return this.userService.update(id, dto);
  }

  @Delete(':user_id')
  remove(@Param('user_id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
