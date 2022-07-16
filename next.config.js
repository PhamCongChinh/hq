/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // remove x-powered-by
  poweredByHeader: false, 

  // disable HTTP Keep-Alive
  httpAgentOptions: {
    keepAlive: false,
  },
}

module.exports = nextConfig
