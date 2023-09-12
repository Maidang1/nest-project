import { Module } from '@nestjs/common';
import { RssCrawleeService } from './rss-crawlee.service';
import { RssCrawleeController } from './rss-crawlee.controller';
import { rssCrawledProviders } from './rss-crawlee.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RssCrawleeController],
  providers: [RssCrawleeService, ...rssCrawledProviders],
})
export class RssCrawleeModule {
  //
}
