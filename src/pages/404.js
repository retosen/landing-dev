import React from 'react'
import Link from 'gatsby-link'
import App from 'src/App'

export default () => (
  <App wrapper="notfound">
    <h1>OH NO! You seem to be lost.</h1>
    <Link to="/" className="routeLink">Click here to follow the trail of garlicoin back home.</Link>
  </App>
);
