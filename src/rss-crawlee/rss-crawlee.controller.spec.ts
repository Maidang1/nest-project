import { Test, TestingModule } from '@nestjs/testing';
import { RssCrawleeController } from './rss-crawlee.controller';
import { RssCrawleeService } from './rss-crawlee.service';

describe('RssCrawleeController', () => {
  let controller: RssCrawleeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RssCrawleeController],
      providers: [RssCrawleeService],
    }).compile();

    controller = module.get<RssCrawleeController>(RssCrawleeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
