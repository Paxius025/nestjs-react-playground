import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SignInDto {
  @ApiProperty({ example: 'john_doe' })
  @IsString()
  usernameOrEmail: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;
}
