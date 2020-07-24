module.exports = {
    siteMetadata: {
        title: `Nicole Lucien`,
        author: `Nicole Lucien`,
        description: `Nicole Lucien's personal site for Gatsby 101 workshop at CodeLand 2020`,
        siteUrl: `https://gatsby-101-personal-site-nic.netlify.app`,
        alternateSite: `https://www.linkedin.com/in/nicolemlucien/`,
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/HerNameisNic`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/nicmlu`,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-mdx`, 
        {
            resolve: `gatsby-theme-blog`, 
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured: true
            }
        }
    ]
}