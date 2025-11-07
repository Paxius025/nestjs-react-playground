import { Module } from '@nestjs/common';
import { WsDroneGateway } from './ws-drone.gateway';
import { TrackingDroneLogModule } from 'src/tracking_drone_log/tracking_drone_log.module';

@Module({
  imports: [TrackingDroneLogModule],
  providers: [WsDroneGateway],
})
export class WsDroneModule {}
