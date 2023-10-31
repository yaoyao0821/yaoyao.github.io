/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require(`path`);
const siteConfig = require(`./src/data/siteConfig`);
const navConfig = require(`./src/data/navConfig`);

module.exports = {
  siteMetadata: {
    title: `Yaoyao's site`,
    siteUrl: `https://www.yaoyao.com`,
    ...siteConfig,
    ...navConfig,
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "data",
        path: `./src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
      __key: "data"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "blobs",
        path: `./src/data/blogs/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
      __key: "blogs"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/",
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
      __key: "images"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yaoyao's site`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
]
};