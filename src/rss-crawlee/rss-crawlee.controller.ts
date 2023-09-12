import { Controller, Get } from '@nestjs/common';
import { RssCrawleeService } from './rss-crawlee.service';

@Controller('rss')
export class RssCrawleeController {
  constructor(private readonly rssCrawleeService: RssCrawleeService) {
    //
  }
  @Get()
  rss() {
    const data = this.rssCrawleeService.getRss();
    return data;
  }

  @Get('/update')
  update() {
    return this.rssCrawleeService.fetchRss();
  }
}
