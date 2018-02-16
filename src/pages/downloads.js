import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import btns from '../_data/downloads'

import DownloadBtn from '../components/downloads/DownloadBtn'

export default () => (
  <div className="downloadsWrapper">
    <Helmet>
      <title>Downloads - Garlicoin</title>
    </Helmet>
    <h1 className="title">Downloads</h1>
    <div className="section">
      <h2>Not sure where to start? Jump over to our <Link to="onboarding">Get Started section</Link>.</h2>
      <div className="downloadsBtns">
        {
          Object.keys(btns).map(
            (btn, i) => <DownloadBtn key={i} data={btns[btn]} />
          )
        }
      </div>
    </div>
  </div>
)
