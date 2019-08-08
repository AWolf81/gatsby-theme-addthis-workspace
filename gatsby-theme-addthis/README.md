# Gatsby Theme AddThis

Gatsby Theme to add the AddThis share buttons to your Gatsby Site.

# Usage example of `gatsby-theme-addthis`
Rename or Copy `.env.example` file to `.env` and add your public id from AddThis [dashboard](https://www.addthis.com/dashboard). Then click on `Get the code` and copy the last part of the url e.g. the script might look like

```html
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-1234abc"></script>
```

So here `ra-1234abc` is your `ADDTHIS_PUBLIC_ID` that you have to add to the `.env` file 
```sh
# .env content
ADDTHIS_PUBLIC_ID=ra-1234abc
```

Configure `gatsby-theme-addthis` and pass the public id by using [dotenv](https://www.npmjs.com/package/dotenv).

`gatsby-config.js` for the example:
```js
require('dotenv').config()

module.exports = {
  plugins: [{ resolve: `@awolf81/gatsby-theme-addthis`, options: {
    publicId: process.env.ADDTHIS_PUBID
  } }],
}
```

# Options

<dl>
  <dt>publicId</dt>
  <dd>Your AddThis public id.</dd>
</dl>

# Components
You can use `AddThisOptions` component in your page to add options to [`AddThis` config variable](https://www.addthis.com/academy/the-addthis_config-variable/).

Import the component with `
import AddThisOptions from '@awolf81/gatsby-theme-addthis/components/AddThisOptions'` and use
```js
<AddThisOptions options={exampleOptions} />
```

Where `exampleOptions` is a JavaScript object of the options you'd like to add to the global config variable of AddThis.

# Troubleshooting
- AddThis not loaded and just the page is rendered. Please check that your public id is correct and correctly passed to `gatsby-theme-addthis` `publicId` option. Also a restart of dev server could be needed to get the updated env var.
- A usage of [gatsby-theme-minimal](https://github.com/ChristopherBiscardi/gatsby-theme-minimal)
that does nothing but use the theme. As a result you will see `Error: Missing resources for /` when navigating to `localhost:8000`. To get
rid of that, create a page in `src/pages/index.js`.
