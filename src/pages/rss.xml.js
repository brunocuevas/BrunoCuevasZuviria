import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Bruno Cuevas Zuviría',
    description: 'Bruno Cuevas Zuviria personal website, blog and CV',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./vault/pubready/*.md')),
    customData: `<language>en-us</language>`,
  });
}