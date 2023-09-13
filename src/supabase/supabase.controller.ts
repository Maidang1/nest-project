import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('/supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {
    //
  }

  @Get()
  async getUsers() {
    return this.supabaseService.getUsers();
  }
}
