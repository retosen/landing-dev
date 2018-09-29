import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import App from 'src/App'
import recipes from 'src/_assets/recipes.svg'
import wallets from 'src/_data/wallets';
import pools from 'src/_data/pools';

export default () => (
  <App name="onboardingWrapper">
    <Helmet>
      <title>Get Started - Garlicoin</title>
    </Helmet>
    <h1 className="title">Get Started</h1>
    <div className="section">
      <h2>We are proud to have <a href="https://pandawanfr.github.io/GarlicRecipes/">Garlic Recipes by Pandawan</a> as our official resource guide for Garlicoin. Click on the book or navigate to the <a href="https://pandawanfr.github.io/GarlicRecipes/">Resources page</a> to learn everything you need to know about this revolutionary new cryptocurrency.</h2>
      <a href="https://pandawanfr.github.io/GarlicRecipes/"><img src={recipes} alt="Garlic Recipes" /></a>
      <h2>If you'd rather jump straight into the action, scroll down to our <a href="#microservices">Microservices section</a> or head over to the <Link to="/downloads" className="routeLink">Downloads page</Link>.</h2>
    </div>
    <div className="section" id="microservices">
      <h1>Microservices</h1>
      <h2>Here you can find wallets, pools and other services the Garlicoin dev team has approved.</h2>
      <h3 className="subTitle">Note: While we trust these services, we are not necessarily affiliated with them.</h3>
      <div className="container">
        <h2 className="header">Wallets</h2>
        { Object.keys(wallets).map(wallet => <a href={wallets[wallet]} target="_blank" rel="noopener noreferrer">{wallet}</a>) }
      </div>
      <div className="container">
        <h2 className="header">Pools</h2>
        { Object.keys(pools).map(pool => <a href={pools[pool]} target="_blank" rel="noopener noreferrer">{pool}</a>) }
        <a href="https://pandawanfr.github.io/GarlicRecipes/pool-mining#list-of-pools" className="viewAll">View All Pools</a>
      </div>
      <div className="container">
        <h2 className="header">Misc.</h2>
        Coming soon.
      </div>
    </div>
  </App>
);
