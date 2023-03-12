import { Test, TestingModule } from '@nestjs/testing';
import { InvateService } from './invate.service';

describe('InvateService', () => {
  let service: InvateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvateService],
    }).compile();

    service = module.get<InvateService>(InvateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
