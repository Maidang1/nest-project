import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://127.0.0.1:27017/rss?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0',
      ),
  },
];
