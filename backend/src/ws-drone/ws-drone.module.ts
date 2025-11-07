import { Module } from '@nestjs/common';
import { WsDroneService } from './ws-drone.service';
import { WsDroneGateway } from './ws-drone.gateway';

@Module({
  providers: [WsDroneGateway, WsDroneService],
})
export class WsDroneModule {}
