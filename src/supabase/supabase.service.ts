import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabaseClient: SupabaseClient,
  ) {
    //
  }

  async getUsers() {
    const token = '';
    const { data, error } = await this.supabaseClient.auth.getUser(token);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
