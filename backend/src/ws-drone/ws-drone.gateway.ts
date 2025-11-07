import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { CreateTrackingDroneLogDto } from 'src/tracking_drone_log/dto/create-tracking_drone_log.dto';
import { TrackingDroneLog } from 'src/tracking_drone_log/entities/tracking_drone_log.entity';
import { TrackingDroneLogService } from 'src/tracking_drone_log/tracking_drone_log.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WsDroneGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  constructor(
    private readonly trackingDroneLogService: TrackingDroneLogService,
  ) {}

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createTrackingDroneLog')
  async handleCreateTrackingDroneLog(
    @MessageBody() createTrackingDroneLogDto: CreateTrackingDroneLogDto,
  ): Promise<TrackingDroneLog> {
    return this.trackingDroneLogService.create(createTrackingDroneLogDto);
  }
}
