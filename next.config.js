// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
//   assetPrefix: '/portfolio/',
//   basePath: "/portfolio",
//   output: "export",  // <=== enables static exports
//   reactStrictMode: true,
//   images: {
//     unoptimized: true, // This is necessary for GitHub Pages, as Next.js optimized images won't work with static exports
//   },
// })

// module.exports = withBundleAnalyzer({
//   staticPageGenerationTimeout: 300,
//   images: {
//     domains: [
//       'www.notion.so',
//       'notion.so',
//       'images.unsplash.com',
//       'pbs.twimg.com',
//       'abs.twimg.com',
//       's3.us-west-2.amazonaws.com',
//     ],
//     formats: ['image/avif', 'image/webp'],
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
//   }
// })

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix,
  basePath,
};