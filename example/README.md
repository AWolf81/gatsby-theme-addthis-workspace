# Gatsby Theme AddThis Example

This theme is based on `gatsby-theme-minimal`

# Troubleshooting
- AddThis not loaded and just the page is rendered. Please check that your public id is correct and correctly passed to `gatsby-theme-addthis` `publicId` option. Also a restart of dev server could be needed to get the updated env var.
- A usage of [gatsby-theme-minimal](https://github.com/ChristopherBiscardi/gatsby-theme-minimal)
that does nothing but use the theme. As a result you will see `Error: Missing resources for /` when navigating to `localhost:8000`. To get
rid of that, create a page in `src/pages/index.js`.
