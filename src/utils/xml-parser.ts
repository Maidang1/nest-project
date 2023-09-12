import { XMLParser } from 'fast-xml-parser';
import { isEmpty } from 'lodash';
const parser = new XMLParser();

export const xmlToJson = (xmlData: string) => {
  const jsonData = parser.parse(xmlData);
  const { feed = {}, rss = {} } = jsonData;
  const { entry = [], author = {} } = feed;
  const { name, uri } = author;
  let data: any[] = [];
  data = entry;
  if (isEmpty(entry)) {
    data = rss?.channel?.item;
  }

  return {
    metaData: {
      name,
      uri,
    },
    data,
  };
};
