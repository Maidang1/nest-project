import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { RssCrawleeModule } from './rss-crawlee/rss-crawlee.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [CatsModule, RssCrawleeModule, ScheduleModule.forRoot()],
})
export class AppModule {
  //
}
