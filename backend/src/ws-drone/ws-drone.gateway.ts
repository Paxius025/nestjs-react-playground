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
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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
    @InjectRepository(TrackingDroneLog)
    private trackingDroneLogRepository: Repository<TrackingDroneLog>,
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
    const newLog = this.trackingDroneLogRepository.create(
      createTrackingDroneLogDto,
    );
    return this.trackingDroneLogRepository.save(newLog);
  }
}
