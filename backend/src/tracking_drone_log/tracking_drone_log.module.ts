import { Module } from '@nestjs/common';
import { TrackingDroneLogService } from './tracking_drone_log.service';
import { TrackingDroneLogController } from './tracking_drone_log.controller';

@Module({
  controllers: [TrackingDroneLogController],
  providers: [TrackingDroneLogService],
})
export class TrackingDroneLogModule {}
