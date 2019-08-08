require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'My Homepage',
    siteUrl: 'https://yourpage.com',
    description: 'This is where I write my thoughts.'
  },
  plugins: [
    {
      resolve: `@awolf81/gatsby-theme-addthis`,
      options: {
        publicId: process.env.ADDTHIS_PUBLIC_ID
      }
    }
  ]
}
