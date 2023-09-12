import { Mongoose } from 'mongoose';
import { RssSchema } from './schemas/rss-crawlee.schema';

export const rssCrawledProviders = [
  {
    provide: 'RSS_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('RSS_MODEL', RssSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
