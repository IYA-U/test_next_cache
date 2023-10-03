module.exports = {
  async headers() {
    return [
      {
        source: '/simple/header_config/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=0, s-maxage=3600,stale-while-revalidate=4000',
          },
        ],
      },
      {
        source: '/realistic/header_config/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=0, s-maxage=3600,stale-while-revalidate=4000',
          },
        ],
      },
    ];
  },
};
