module.exports = {
  async headers() {
    return [
      {
        source: '/revalidate_with_nextconfig/(.*)',
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
