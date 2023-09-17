import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { RssCrawleeModule } from './rss-crawlee/rss-crawlee.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './supabase/supabase.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CatsModule,
    RssCrawleeModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    UsersModule,
  ],
})
export class AppModule {
  //
}

console.log(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
