import React from 'react'

import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons'
import Icon from 'src/components/Icon'

export default () => (
  <div className="progress section">
    <h1 className="title">Where We're At</h1>
    <h2 className="subTitle">We're currently hard at work developing this website, the exchange, and GarliCoin itself! Check on our discord and reddit for more updates.</h2>
    <div className="progressLinks">
      <a href="https://discord.gg/nZWHe33" target="_blank" rel="noopener noreferrer" className="discordLink">
        <Icon icon={faDiscord} />
      </a>
      <a href="https://garlicoin.reddit.com" target="_blank" rel="noopener noreferrer" className="redditLink">
        <Icon icon={faReddit} />
      </a>
    </div>
  </div>
);
