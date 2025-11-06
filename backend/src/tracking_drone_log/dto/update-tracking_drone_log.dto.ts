import { PartialType } from '@nestjs/swagger';
import { CreateTrackingDroneLogDto } from './create-tracking_drone_log.dto';

export class UpdateTrackingDroneLogDto extends PartialType(CreateTrackingDroneLogDto) {}
