const path = require('path');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: 'The Huts Emsworth',
        siteUrl: 'https://www.thehutsemsworth.co.uk'
    },
    plugins: [
        'gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-sitemap', 'gatsby-plugin-mdx', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.thehutsemsworth.co.uk',
                sitemap: 'https://www.thehutsemsworth.co.uk/sitemap-index.xml',
                policy: [{
                    userAgent: '*',
                    allow: '/',
                }]
            }
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-MBBHSGB',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                'name': 'images',
                'path': './static/img/'
            },
            __key: 'images'
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                'name': 'pages',
                'path': './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: 'gatsby-plugin-alias-imports',
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@static': path.resolve(__dirname, 'static'),
                },
                extensions: []
            }
        }
    ]
};