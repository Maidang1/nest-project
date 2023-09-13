import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SupabaseController } from './supabase.controller';
import { createClient } from '@supabase/supabase-js';

const SupabaseProvider = [
  {
    provide: 'SUPABASE_CLIENT',
    useValue: createClient('', ''),
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
