import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';

@ApiBearerAuth('jwt')
@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiBody({ type: CreatePostDto })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  // @Get()
  // findAll() {
  //   return this.postsService.findAll();
  // }

  @Get(':post_id')
  findOne(@Param('post_id') post_id: string) {
    return this.postsService.findOne(+post_id);
  }

  @Get(':user_id')
  findUserPosts(@Param('user_id') user_id: string) {
    return this.postsService.findUserPosts(+user_id);
  }

  @Patch(':post_id')
  @ApiBody({ type: UpdatePostDto })
  update(
    @Param('post_id') post_id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(+post_id, updatePostDto);
  }

  @Delete(':post_id')
  remove(@Param('post_id') post_id: string) {
    return this.postsService.remove(+post_id);
  }
}
