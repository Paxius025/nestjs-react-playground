import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDroneLogController } from './tracking_drone_log.controller';
import { TrackingDroneLogService } from './tracking_drone_log.service';

describe('TrackingDroneLogController', () => {
  let controller: TrackingDroneLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackingDroneLogController],
      providers: [TrackingDroneLogService],
    }).compile();

    controller = module.get<TrackingDroneLogController>(TrackingDroneLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
