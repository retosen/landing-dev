import React from 'react'
import Link from 'gatsby-link'

export default (props) => (
  <div className="navOverlay">
    <Link to="/">
      <span onClick={props.toggle}>Home</span>
    </Link>
    <Link to="/onboarding">
      <span onClick={props.toggle}>Get Started</span>
    </Link>
    <Link to="/downloads">
      <span onClick={props.toggle}>Downloads</span>
    </Link>
    <Link to="/">
      <span onClick={props.toggle}>Resources</span>
    </Link>
  </div>
)
