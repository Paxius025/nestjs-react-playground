import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
  ) {}

  create(createPostDto: CreatePostDto): Promise<Posts> {
    const post = this.postsRepository.create(createPostDto as Partial<Posts>);
    return this.postsRepository.save(post);
  }

  // findAll(): Promise<Posts[]> {
  //   return this.postsRepository.find();
  // }

  findUserPosts(user_id: number): Promise<Posts[]> {
    if (!user_id) {
      throw new NotFoundException(`User ID must be provided`);
    }
    return this.postsRepository.find({ where: { user_id } });
  }

  findOne(post_id: number): Promise<Posts | null> {
    return this.postsRepository.findOne({ where: { post_id } });
  }

  update(post_id: number, updatePostDto: UpdatePostDto): Promise<Posts> {
    return this.postsRepository.save({ ...updatePostDto, post_id });
  }

  remove(post_id: number) {
    return this.postsRepository.delete({ post_id });
  }
}
