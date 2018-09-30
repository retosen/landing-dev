import React from 'react'
import Link from 'gatsby-link'

import Logo from 'src/components/svg/Logo'
import recipes from "src/_assets/recipes.svg";

export default () => (
  <nav>
    <Link to="/" className="navLogo">
      <Logo name="logo" />
      <span>Garlicoin</span>
    </Link>
    <Link to="/" className="navBtn routeLink">Home</Link>
    <Link to="/onboarding" className="navBtn routeLink">Get Started</Link>
    <Link to="/downloads" className="navBtn routeLink">Downloads</Link>
    <Link to="/resources" className="navBtn">
      <img src={recipes} alt="Garlic Recipes" />
    </Link>
  </nav>
);
