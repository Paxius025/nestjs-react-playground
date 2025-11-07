import { Test, TestingModule } from '@nestjs/testing';
import { WsDroneGateway } from './ws-drone.gateway';

describe('WsDroneGateway', () => {
  let gateway: WsDroneGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsDroneGateway],
    }).compile();

    gateway = module.get<WsDroneGateway>(WsDroneGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
