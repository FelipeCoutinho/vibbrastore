import { Test, TestingModule } from '@nestjs/testing';
import { InvateController } from './invate.controller';
import { InvateService } from './invate.service';

describe('InvateController', () => {
  let controller: InvateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvateController],
      providers: [InvateService],
    }).compile();

    controller = module.get<InvateController>(InvateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
