import React from 'react'
import Link from 'gatsby-link'

// import logo from '../../_assets/logo.png'
import logo from '../../_assets/garlicoin-logo.svg'
import recipes from '../../_assets/recipes.svg'

const Nav = (props) => (
      <div className="nav">
        <Link to="/" className="navLogo">
          <img src={logo} alt="Logo" />
          <span>Garlicoin</span>
        </Link>
        <Link to="/" className="navBtn">Home</Link>
        <Link to="/onboarding" className="navBtn">Get Started</Link>
        <Link to="/downloads" className="navBtn">Downloads</Link>
        <Link to="/resources" className="navBtn">Resources</Link>
        <div className="hamburger" onClick={props.toggle}>
          <i className="fa fa-bars fa-2x" aria-hidden="true" />
        </div>
        <Link to="/" className="navLogoMobile">
          <i className="fas fa-home" />
        </Link>
        <Link to="/onboarding" className="navBtnMobile">
          <i className="fas fa-bullhorn" />
        </Link>
        <Link to="/downloads" className="navBtnMobile">
          <i className="fas fa-download" />
        </Link>
        <Link to="/resources" className="navBtnMobile">
          {/*<img src={recipes} alt="Garlic Recipes" />*/}
          <i className="fas fa-book" />
        </Link>
      </div>
)

export default Nav
