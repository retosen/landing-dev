import React from 'react'
import Link from 'gatsby-link'

import logo from '../../_assets/logo.png'

export default (props) => (
  <div className="mainBanner">
    <div>
      <img src={logo} id="logoBanner" alt="Logo" />
      <h1>Garlicoin is the new, friendly, decentralized cryptocurrency that you've never heard of.</h1>
      <Link to="/onboarding">GET STARTED</Link>
    </div>
    <span className="moreInfo">
      Scroll to Learn More <i className="fa fa-chevron-down" />
    </span>
  </div>
)
