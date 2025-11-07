import { Test, TestingModule } from '@nestjs/testing';
import { WsDroneGateway } from './ws-drone.gateway';
import { WsDroneService } from './ws-drone.service';

describe('WsDroneGateway', () => {
  let gateway: WsDroneGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsDroneGateway, WsDroneService],
    }).compile();

    gateway = module.get<WsDroneGateway>(WsDroneGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
