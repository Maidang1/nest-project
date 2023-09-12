import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { RssCrawleeModule } from './rss-crawlee/rss-crawlee.module';

@Module({
  imports: [CatsModule, RssCrawleeModule],
})
export class AppModule {
  //
}
