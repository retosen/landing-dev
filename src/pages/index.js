import React from 'react'
import Link from 'gatsby-link'

import MainHeader from '../components/home/MainHeader'
import FeatureBox from '../components/home/FeatureBox'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
  }

  render() {
    return (
      <div className="mainWrapper">
        <MainHeader />
        <div id="page2" className="description section">
          <h1 className="title">Fresh out of the oven: Garlicoin</h1>
          <h2 className="subTitle">Garlicoin is a new, freshly baked cryptocurrency, born from the shitposts of Reddit.</h2>
          <p>On December 25, 2017, Reddit user u/DigitalizedOrange presented his dream to the newly-found Garlicoin community: to create a cryptocurrency to revolutionize the memecoin market. Shortly there-after, the community exploded into action - a development team was assembled rapidly and the testnet went live shortly after. On the 21st of January at 2pm EST, the mainnet was made public and the memecoin market was changed forever.</p>
          <p>Garlicoin formed on a few simple fundamentals - cheap and fast transactions, low barrier to entry and total focus on the community. These fundamentals have been put into practice, resulting in Garlicoin being a triumphant success: 40 second block times allow for blazingly fast confirmations, our ASIC resistant proof-of-work algorithm means anyone with a GPU can contribute to mining, and many important decisions have been made by the rapidly growing Garlicoin community.</p>
        </div>
        <div id="page3" className="features section">
          <h1 className="title">Baked with our special ingredient, copy/paste&trade;</h1>
          <h2 className="subTitle">Hot out of the oven, and with a boast of features identical to and present in countless other cryptocurrencies.</h2>
          <div id="featureBoxContainer">
            <FeatureBox icon="fa fa-lock" title="Secure">
              <p>Garlicoin is like the deadbolt for door locks; it's secure and protects you from crypto-vampires. Blockchain tech makes it nearly impossible to run a brute-force attack and with our <span className="strike">advances</span> copy-and-pastes in wallet encryption, you can be moderately safe that your garlic bread isn't going anywhere.</p>
            </FeatureBox>
            <FeatureBox icon="fa fa-space-shuttle" title="Blazing Fast">
              <p>Garlicoin trading speed is <span className="strike">near instant</span> pretty fast. Never be inconvienienced again with slow transaction speeds and high rates!</p>
            </FeatureBox>
            <FeatureBox icon="fa fa-code" title="Open Source">
              <p>Wanna take a closer look at Garlicoin? Do it! Just like the other "cool" cryptocurrencies, you'll be sure to find just what makes us tick on our <a href="https://github.com">GitHub.</a></p>
            </FeatureBox>
            <FeatureBox icon="fa fa-gem" title="Decentralized">
              <p>If you're like us, you hate fiat currencies; slow, paper, and prone to inflation. Decentralized (as in Garlicoin) currencies like Bitcoin and Ethereum have a limited amount on market. 69 million Garlicoin will only ever be available on market.</p>
            </FeatureBox>
          </div>
        </div>
        <div className="progress section">
          <h1 className="title">Where We're At</h1>
          <h2 className="subTitle">We're currently hard at work developing this website, the exchange, and GarliCoin itself! Check on our discord and reddit for more updates.</h2>
          <div className="progressLinks">
            <a href="https://discord.gg/nZWHe33" target="_blank" className="discordLink">
              <i className="fab fa-discord" />
            </a>
            <a href="https://garlicoin.reddit.com" target="_blank" className="redditLink">
              <i className="fab fa-reddit" />
            </a>
          </div>
        </div>
        <div id="page5" className="mainResources section">
          <h1 className="title">Ready for Life</h1>
          <h2 className="subTitle">With a host of online resources, Garlicoin is ready for real-world implementation.</h2>
          <div className="band">
            <a href="https://medium.com/@retosen.dev/an-explanation-3119e44407ba" target="_blank" className="card">
              <h1>Latest Blog Post</h1>
              <p>Garlicoin’s Issues, an Explanation and our Solutions.</p>
              <p>Click to read.</p>
            </a>

            <Link to="#" className="card">
              <h1>Shop</h1>
              <p>Coming soon.</p>
            </Link>

            <Link to="#" className="card">
              <h1>Developer Resources</h1>
              <p>Coming soon.</p>
            </Link>

            <Link to="#" className="card">
              <h1>Forum</h1>
              <p>Coming soon.</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
