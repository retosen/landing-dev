import React from 'react'

import Link from 'gatsby-link'
import { faHome, faBullhorn, faDownload } from '@fortawesome/free-solid-svg-icons'
import Icon from 'src/components/Icon'

export default () => (
  <div className="mobileNav">
    <Link to="/" className="navBtnMobile">
      <Icon icon={faHome} />
    </Link>
    <Link to="/onboarding" className="navBtnMobile">
      <Icon icon={faBullhorn} />
    </Link>
    <Link to="/downloads" className="navBtnMobile">
      <Icon icon={faDownload} />
    </Link>
  </div>
)
