import { Mongoose } from 'mongoose';
import { RssSchema, UsersSchema } from './schemas/rss-crawlee.schema';

export const rssCrawledProviders = [
  {
    provide: 'RSS_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('RSS_MODEL', RssSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'USERS',
    useFactory: (mongoose: Mongoose) => mongoose.model('USERS', UsersSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
