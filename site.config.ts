import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1283c66cde568125899af697bae3c23e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Surface Shoe Care',
  domain: 'localhost:3000',
  author: 'Surface Shoe Care',

  // open graph metadata (optional)
  description: 'Welcome to Surface Shoe Care',

  // social usernames (optional)
  whatsapp: 'https://api.whatsapp.com/send/?phone=6285159002204&text&type=phone_number&app_absent=0',
  instagram_main: 'surface.shoecare',
  tiktok: 'surfacesc',
  // twitter: '',
  // github: '',
  // linkedin: '',
  // mastodon: '#',
  // newsletter: '#',
  // youtube: '#',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Campaigns & Promos',
      pageId: '1373c66cde5680e2b5cdfde671c88c6f'
    },
    {
      title: 'KOLs/ Influencers',
      pageId: '1373c66cde56807d88b7f54da657c500'
    },
    {
      title: 'Communities',
      pageId: '1373c66cde5680cfbccdeb842b302f15'
    },
    {
      title: 'Our Social Medias',
      pageId: '1283c66cde56815eab59fc48a827a4c4'
    },
    {
      title: 'Blogs',
      pageId: '1363c66cde5680609eaecf2c03ef6f70'
    }
  ]
})
