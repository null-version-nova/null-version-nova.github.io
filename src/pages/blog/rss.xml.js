import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'Many-Named Angel',
    // `<description>` field in output xml
    description: 'musings of an angel regarding art, community, and spirituality',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site + "/blog",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(
      import.meta.glob('../blog/**.md'),
    ),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}