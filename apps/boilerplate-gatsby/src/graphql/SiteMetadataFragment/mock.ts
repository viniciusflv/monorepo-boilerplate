import * as SiteMetadata from '.';

beforeEach(() => {
  jest.spyOn(SiteMetadata, 'useSiteMetadata').mockImplementationOnce(() => ({
    title: `Boilerplate Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    titleTemplate: `%s | Boilerplate`,
    description: `Boilerplate`,
    keywords: `Boilerplate`,
    siteName: `Boilerplate`,
    author: `Boilerplate`,
    locale: `pt-BR`,
    image: {
      path: 'icons/icon-512x512.png',
      type: 'image/png',
      size: '512',
    },
  }));
});
