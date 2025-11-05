import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsNumber()
  @ApiProperty({ example: 1 })
  post_id!: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Updated Title' })
  title!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Updated Content' })
  content!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Updated Author' })
  author!: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1 })
  user_id!: number;
}
