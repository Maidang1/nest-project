import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SupabaseController } from './supabase.controller';
import { createClient } from '@supabase/supabase-js';

const SupabaseProvider = [
  {
    provide: 'SUPABASE_CLIENT',
    useValue: createClient(
      'https://fxsxedmgqjcfdmjxjbwy.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4c3hlZG1ncWpjZmRtanhqYnd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNTU2MTAsImV4cCI6MjAwNDkzMTYxMH0.yFnAzA9mH0keAwzEoG0TVXqSy_ujwVsv7jLpxhV_YSg',
    ),
  },
];

@Module({
  controllers: [SupabaseController],
  providers: [SupabaseService, ...SupabaseProvider],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {
  //
}
