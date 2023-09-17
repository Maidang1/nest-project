import { Inject, Injectable } from '@nestjs/common';
import { RssList, RssModel, UsersModel } from './interface/rss';
import { ofetch } from 'ofetch';
import { xmlToJson } from 'src/utils/xml-parser';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
const rssList: RssList = [
  {
    name: 'Sukka',
    url: 'https://blog.skk.moe/atom.xml',
  },
  {
    name: 'JavascriptWeekly',
    url: 'https://cprss.s3.amazonaws.com/javascriptweekly.com.xml',
  },
  {
    name: 'Max',
    url: 'https://mxstbr.com/rss',
  },
  {
    name: 'MDN',
    url: 'https://developer.mozilla.org/en-US/blog/rss.xml',
  },
  {
    name: 'README Project',
    url: 'https://feeds.simplecast.com/ioCY0vfY',
  },
  {
    name: 'React Status',
    url: 'https://cprss.s3.amazonaws.com/react.statuscode.com.xml',
  },
  {
    name: 'mdh',
    url: 'https://mdhweekly.com/rss.xml',
  },
];

@Injectable()
export class RssCrawleeService {
  constructor(
    @Inject('RSS_MODEL') private readonly rssModel: Model<RssModel>,
    @Inject('USERS') private readonly usersModel: Model<UsersModel>,
  ) {
    //
  }
  @Cron(CronExpression.EVERY_12_HOURS)
  fetchRss() {
    return Promise.all(
      rssList.map(async (rssItem) => {
        const data = await ofetch(rssItem.url, {
          responseType: 'json',
          parseResponse: xmlToJson,
        });
        this.rssModel.create({
          ...data,
          metaData: {
            ...rssItem,
          },
        });
        return data;
      }),
    );
  }
  getRss() {
    return this.rssModel.find({});
  }

  createUserLink(data: UsersModel) {
    const { name, email, subscribeRss } = data;
    return this.usersModel.updateOne(
      { name, email },
      { name, email, subscribeRss },
      {
        setDefaultsOnInsert: true,
        upsert: true,
      },
    );
  }
  getUserSubscribeRssLink({ name, email }: Pick<UsersModel, 'email' | 'name'>) {
    return this.usersModel.findOne({ name, email });
  }
  async getUserSubscribeRssFeed({
    name,
    email,
  }: Pick<UsersModel, 'email' | 'name'>) {
    const subscribeRss = (
      await this.usersModel.findOne({ name, email })
    ).toJSON().subscribeRss;
    return this.rssModel.find({
      'metaData.url': { $in: subscribeRss.map((sub) => sub.url) },
    });
  }
}
