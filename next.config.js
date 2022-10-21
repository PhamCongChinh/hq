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
    //Keep build id
    /*generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'my-build-id'
    },*/
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/public',
    },

    /*generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'my-build-id'
    },*/
    
}

module.exports = nextConfig
