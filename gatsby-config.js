module.exports = {
  siteMetadata: {
    title: `Hanhikivi Information Center`,
    description: `Website for the Hanhikivi Information Center`,
    author: `@avnerus`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
	`gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/news`,
      },
    },
    {
          resolve: `gatsby-source-filesystem`,
          options: {
          name: `pages`,
          path: `${__dirname}/src/pages`,
            },
    },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://center.us3.list-manage.com/subscribe/post?u=40c954d9f0bfbecef4a7c0139&amp;id=a0454126d4', // add your MC list endpoint here; see instructions below
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                  maxWidth: 590,
                  showCaptions: true,
                  wrapperStyle: "margin-bottom:20px;"
              }
            },
            "gatsby-remark-component",
             {
                  resolve: `gatsby-remark-copy-linked-files`,
                  options: {
                    destinationDir: `path/to/dir`,
                    ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
                  }
             }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `hanhikivi`
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
