import * as mongoose from 'mongoose';

export const RssSchema = new mongoose.Schema({
  metaData: {
    name: String,
    url: String,
  },
  data: [
    {
      title: String,
      id: String,
      link: String,
      updated: String,
      summary: String,
      content: String,
      category: String,
      published: String,
    },
  ],
});
