import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDroneLogService } from './tracking_drone_log.service';

describe('TrackingDroneLogService', () => {
  let service: TrackingDroneLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackingDroneLogService],
    }).compile();

    service = module.get<TrackingDroneLogService>(TrackingDroneLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
