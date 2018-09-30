import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import App from 'src/App'
import ServiceSection from 'src/components/ServiceSection'

import recipes from 'src/_assets/recipes.svg'
import services from 'src/_data/services'

export default () => (
  <App wrapper="onboardingWrapper" page="onboarding">
    <Helmet>
      <title>Get Started - Garlicoin</title>
    </Helmet>
    <h1 className="title">Get Started</h1>
    <div className="section">
      <h2>We are proud to have Garlic Recipes as our official resource guide for Garlicoin. Click on the book or navigate to <a href="/resources">garlicoin.io/resources</a> to learn everything you need to know about this revolutionary new cryptocurrency.</h2>
      <a href="/resources"><img src={recipes} alt="Garlic Recipes" /></a>
      <h2>If you'd rather jump straight into the action, scroll down to our <a href="#services">Services section</a> or head over to the <Link to="/downloads" className="routeLink">Downloads page</Link>.</h2>
    </div>
    <div className="section" id="services">
      <h1>Services</h1>
      <h2>Here you can find wallets, pools and other services the Garlicoin dev team has approved.</h2>
      <h3 className="subTitle">Note: While we trust these services, we are not necessarily affiliated with them.</h3>
      {Object.keys(services).map(section => (
        <ServiceSection key={section} title={section} values={services[section]} />
      ))}
    </div>
  </App>
);
