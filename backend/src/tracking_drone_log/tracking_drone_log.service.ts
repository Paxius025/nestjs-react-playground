import { Injectable } from '@nestjs/common';
import { CreateTrackingDroneLogDto } from './dto/create-tracking_drone_log.dto';
import { UpdateTrackingDroneLogDto } from './dto/update-tracking_drone_log.dto';
import { TrackingDroneLog } from './entities/tracking_drone_log.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TrackingDroneLogService {
  constructor(
    @InjectRepository(TrackingDroneLog)
    private trackingDroneLogRepository: Repository<TrackingDroneLog>,
  ) {}

  create(createTrackingDroneLogDto: CreateTrackingDroneLogDto) {
    const trackingDroneLog = this.trackingDroneLogRepository.create(
      createTrackingDroneLogDto,
    );
    return this.trackingDroneLogRepository.save(trackingDroneLog);
  }

  findAll() {
    return this.trackingDroneLogRepository.find();
  }

  findOne(id: number) {
    return this.trackingDroneLogRepository.findOneBy({ id });
  }

  update(id: number, updateTrackingDroneLogDto: UpdateTrackingDroneLogDto) {
    return this.trackingDroneLogRepository.update(
      id,
      updateTrackingDroneLogDto,
    );
  }

  remove(id: number) {
    return this.trackingDroneLogRepository.delete(id);
  }
}
