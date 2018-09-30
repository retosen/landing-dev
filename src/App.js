import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import classNames from 'classnames'
import Nav from 'src/layout/Nav'
import MobileNav from 'src/layout/MobileNav'
import Alert from 'src/layout/Alert'
import Footer from 'src/layout/Footer'

import logo from 'src/_assets/logo.png'

import './stylesheets/main.scss'

export default class App extends React.Component {
  toggleOverlay = () => {
    this.setState({
      overlay: !this.state.overlay
    });
  };

  render() {
    const { wrapper, page, children } = this.props;

    return (
      <Fragment>
        <Helmet
          title="Garlicoin"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { httpEquiv: 'Content-Security-Policy', content: "default-src 'self' ; script-src 'self' 'unsafe-inline' *.disqus.com a.disquscdn.com requirejs.org www.google-analytics.com; style-src 'self' 'unsafe-inline' a.disquscdn.com; img-src 'self' *; media-src 'self' ; frame-src disqus.com;" }]}
          link={[{ href: logo, rel: 'icon', type: 'image/x-icon' }]} />
        <div className={classNames('app', { [page]: !!page })}>
          <Nav />
          <Alert />
          <div className={wrapper}>
            { children }
          </div>
          <Footer />
          <MobileNav />
        </div>
      </Fragment>
    )
  }
}

App.propTypes = {
  children: PropTypes.array,
};
