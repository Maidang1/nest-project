import { Test, TestingModule } from '@nestjs/testing';
import { RssCrawleeService } from './rss-crawlee.service';

describe('RssCrawleeService', () => {
  let service: RssCrawleeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RssCrawleeService],
    }).compile();

    service = module.get<RssCrawleeService>(RssCrawleeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
