import { Injectable } from '@nestjs/common';
import { CreateTrackingDroneLogDto } from './dto/create-tracking_drone_log.dto';
import { UpdateTrackingDroneLogDto } from './dto/update-tracking_drone_log.dto';

@Injectable()
export class TrackingDroneLogService {
  create(createTrackingDroneLogDto: CreateTrackingDroneLogDto) {
    return 'This action adds a new trackingDroneLog';
  }

  findAll() {
    return `This action returns all trackingDroneLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trackingDroneLog`;
  }

  update(id: number, updateTrackingDroneLogDto: UpdateTrackingDroneLogDto) {
    return `This action updates a #${id} trackingDroneLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} trackingDroneLog`;
  }
}
