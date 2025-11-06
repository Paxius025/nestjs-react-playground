import { Module } from '@nestjs/common';
import { TrackingDroneLogService } from './tracking_drone_log.service';
import { TrackingDroneLogController } from './tracking_drone_log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackingDroneLog } from './entities/tracking_drone_log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrackingDroneLog])],
  controllers: [TrackingDroneLogController],
  providers: [TrackingDroneLogService],
  exports: [
    TrackingDroneLogService,
    TypeOrmModule.forFeature([TrackingDroneLog]),
  ],
})
export class TrackingDroneLogModule {}
