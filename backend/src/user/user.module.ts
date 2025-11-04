import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtSharedModule } from 'src/SharedModule/jwt-shared.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtSharedModule],
  controllers: [UserController],
  providers: [UserService, JwtAuthGuard],
  exports: [UserService],
})
export class UserModule {}
