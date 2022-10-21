module.exports = {
    siteUrl: process.env.SITE_URL || 'https://thietbihq.com',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: ['/protected-page', '/awesome/secret-page'],
}