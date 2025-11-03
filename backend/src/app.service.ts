import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    console.log('Database Host:', this.configService.get<string>('DB_HOST'));
  }
  getHello(): string {
    return 'Hello World!';
  }
}
