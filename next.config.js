// module.exports = {
//     reactStrictMode: true,
//     trailingSlash: true,
//     assetPrefix: '.',
//   exportPathMap: async function () {
//     return {
//       '/': { page: '/' },
//       '/works': { page: '/works' },
//     }
//   },
// }

const withPWA = require('next-pwa')({
    dest: 'public'
  })

  module.exports = withPWA({
    // next.js config
  })