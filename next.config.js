module.exports = {
  async headers() {
    return [
      {
        source: '/revalidate_with_nextconfig/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=3600',
          },
        ],
      },
    ];
  },
};
