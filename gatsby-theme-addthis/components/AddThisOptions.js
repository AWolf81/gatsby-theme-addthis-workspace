import React from 'react'
import Helmet from 'react-helmet'

const AddThisOptions = ({ options }) => (
  <Helmet>
    <script type='text/javascript'>{`var addthis_share = ${JSON.stringify(
      options
    )}`}</script>
  </Helmet>
)

AddThisOptions.displayName = 'AddThisOptions'

export default AddThisOptions
