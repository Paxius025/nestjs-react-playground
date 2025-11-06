import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrackingDroneLogService } from './tracking_drone_log.service';
import { CreateTrackingDroneLogDto } from './dto/create-tracking_drone_log.dto';
import { UpdateTrackingDroneLogDto } from './dto/update-tracking_drone_log.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('tracking-drone-log')
export class TrackingDroneLogController {
  constructor(
    private readonly trackingDroneLogService: TrackingDroneLogService,
  ) {}

  @Post()
  @ApiBody({ type: CreateTrackingDroneLogDto })
  create(@Body() createTrackingDroneLogDto: CreateTrackingDroneLogDto) {
    return this.trackingDroneLogService.create(createTrackingDroneLogDto);
  }

  @Get()
  findAll() {
    return this.trackingDroneLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackingDroneLogService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrackingDroneLogDto: UpdateTrackingDroneLogDto,
  ) {
    return this.trackingDroneLogService.update(+id, updateTrackingDroneLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackingDroneLogService.remove(+id);
  }
}
