import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import fontawesome from '@fortawesome/fontawesome'
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes'

import Nav from '../components/global/Nav'
import Footer from '../components/global/Footer'
import MobileNav from '../components/global/MobileNav'

import '../stylesheets/main.scss'

import logo from '../_assets/logo.png'
import alert from '../_data/alert'

fontawesome.library.add(faTimes);

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      page: 'home',
      alert: alert.message
    }
  }

  componentWillMount() {
    this.setPage();
  }

  componentDidUpdate() {
    this.setPage();
  }

  setPage = () => {
    const path = this.props.location.pathname.split('/');
    const slug = path[1];
    if (slug !== this.state.page) {
      this.setState({
        page: slug ? slug : ''
      });
    }
  };

  toggleOverlay = () => {
    this.setState({
      overlay: !this.state.overlay
    });
  };

  handleCloseAlert = () => {
    this.setState({
      alert: null
    });
  };

  render() {
    const longAlert = alert.message.length > 45;

    return (
      <div className={this.state.page ? this.state.page : 'home'}>
        <Helmet
          title="Garlicoin"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { httpEquiv: 'Content-Security-Policy', content: "default-src 'self' ; script-src 'self' 'unsafe-inline' *.disqus.com a.disquscdn.com requirejs.org www.google-analytics.com; style-src 'self' 'unsafe-inline' a.disquscdn.com; img-src 'self' *; media-src 'self' ; frame-src disqus.com;" }]}
          link={[{ href: logo, rel: 'icon', type: 'image/x-icon' }]}
          script={[
            { defer: true, src: 'https://use.fontawesome.com/releases/v5.0.4/js/all.js' }
          ]} />
        { this.state.overlay ? <MobileNav toggle={this.toggleOverlay} /> : null }
        <Nav toggle={this.toggleOverlay} page={this.pageName} />
        {
          this.state.alert
            ? <div id="alert" className={`${alert.type}${longAlert ? ' long' : null}`}>
              <a href={alert.link ? alert.link : "#"}>
                {alert.message}
              </a>
              <span className="closeAlert" onClick={this.handleCloseAlert}>
                <i className="fal fa-times" />
              </span>
            </div>
            : null
        }
        <div className={`${this.state.overlay ? 'overlay ' : ''}${this.state.alert ? 'alert' : ''}`}>
          { this.props.children() }
        </div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
