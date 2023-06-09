/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/test',
        destination: 'https://testsafebrowsing.appspot.com/s/malware.html',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
