export interface Rss {
  name: string;
  url: string;
}

export type RssList = Rss[];

export interface RssModel {
  metaData: {
    name: string;
    uri: string;
  };
  data: {
    title: string;
    id: string;
    link: string;
    updated: string;
    summary: string;
    content: string;
    category: string;
    published: string;
  }[];
}
