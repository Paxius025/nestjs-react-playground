import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty({ example: 'Post Title' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 'Post Content' })
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty({ example: 'Post Author' })
  @IsString()
  @IsNotEmpty()
  author!: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  user_id!: number;
}
