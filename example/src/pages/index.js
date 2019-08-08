import React from 'react'
import { graphql } from 'gatsby'
import AddThisOptions from '@awolf81/gatsby-theme-addthis/components/AddThisOptions'

const Example = ({ data }) => {
  const exampleOptions = {
    url: data.site.siteMetadata.siteUrl,
    title: data.site.siteMetadata.title,
    passthrough: {
      twitter: {
        via: 'awolf81'
        // hashtags: "javascript,react"
      }
    }
    // media: "twitterCardImage"
  }

  return (
    <>
      <AddThisOptions options={exampleOptions} />
      <div>Homepage in a user&apos;s site</div>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`

Example.displayName = 'Example'

export default Example
