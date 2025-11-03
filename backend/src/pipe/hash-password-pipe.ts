import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
  async transform(value: CreateUserDto): Promise<CreateUserDto> {
    console.log('before hashing: ', value);
    if (!value.password) {
      throw new BadRequestException('Password is required');
    }
    const saltRounds = 10;

    let hashedPassword: string;
    try {
      hashedPassword = await hash(value.password, saltRounds);
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new BadRequestException('Error hashing password');
    }
    console.log('after hashing: ', { ...value, password: hashedPassword });
    return {
      ...value,
      password: hashedPassword,
    };
  }
}
