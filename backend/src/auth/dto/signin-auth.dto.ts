import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SignInDto {
  @ApiProperty({ example: 'admin1234' })
  @IsString()
  usernameOrEmail: string;

  @ApiProperty({ example: 'admin1234' })
  @IsString()
  password: string;
}
