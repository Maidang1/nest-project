import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RssCrawleeService } from './rss-crawlee.service';
import { UsersModel } from './interface/rss';

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

  @Post('/user/link')
  userSubscribeRssLink(@Body() data: UsersModel) {
    return this.rssCrawleeService.createUserLink(data);
  }
  @Get('/user/link')
  getUserSubscribeRssLink(
    @Query('name') name: string,
    @Query('email') email: string,
  ) {
    return this.rssCrawleeService.getUserSubscribeRssLink({ name, email });
  }
  @Get('/user/feed')
  async getUserSubscribeRssFeed(
    @Query('name') name: string,
    @Query('email') email: string,
  ) {
    return this.rssCrawleeService.getUserSubscribeRssFeed({ name, email });
  }
}
