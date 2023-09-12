import { Inject, Injectable } from '@nestjs/common';
import { RssList, RssModel } from './interface/rss';
import { ofetch } from 'ofetch';
import { xmlToJson } from 'src/utils/xml-parser';
import { Model } from 'mongoose';
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
  constructor(@Inject('RSS_MODEL') private readonly rssModel: Model<RssModel>) {
    //
  }
  fetchRss() {
    return Promise.all(
      rssList.map(async (rssItem) => {
        const data = await ofetch(rssItem.url, {
          responseType: 'json',
          parseResponse: xmlToJson,
        });
        this.rssModel.create(data);
        return data;
      }),
    );
  }
  getRss() {
    return this.rssModel.find({});
  }
}
