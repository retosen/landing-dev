import React from 'react'
import Link from 'gatsby-link'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Icon from 'src/components/Icon'
import logo from 'src/_assets/logo.png'

export default () => (
  <div className="mainBanner">
    <img src={logo} className="logoBanner" alt="Logo" />
    <h1>Garlicoin is the new, friendly, decentralized cryptocurrency that you've never heard of.</h1>
    <Link to="/onboarding">GET STARTED</Link>
    <span className="moreInfo">
      Scroll to Learn More <Icon icon={faChevronDown} />
    </span>
  </div>
)
