import React from 'react'

import { faLock, faSpaceShuttle, faCode, faGem } from '@fortawesome/free-solid-svg-icons'
import FeatureBox from 'src/components/home/FeatureBox'

export default () => (
  <div className="features section">
    <h1 className="title">Baked with our special ingredient, copy/paste&trade;</h1>
    <h2 className="subTitle">Hot out of the oven, and with a boast of features identical to and present in countless other cryptocurrencies.</h2>
    <div id="featureBoxContainer">
      <FeatureBox icon={faLock} title="Secure">
        <p>Garlicoin is like the deadbolt for door locks; it's secure and protects you from crypto-vampires. Blockchain tech makes it nearly impossible to run a brute-force attack and with our <span className="strike">advances</span> copy-and-pastes in wallet encryption, you can be moderately safe that your garlic bread isn't going anywhere.</p>
      </FeatureBox>
      <FeatureBox icon={faSpaceShuttle} title="Blazing Fast">
        <p>Garlicoin trading speed is <span className="strike">near instant</span> pretty fast. Never be inconvienienced again with slow transaction speeds and high rates!</p>
      </FeatureBox>
      <FeatureBox icon={faCode} title="Open Source">
        <p>Wanna take a closer look at Garlicoin? Do it! Just like the other "cool" cryptocurrencies, you'll be sure to find just what makes us tick on our <a href="https://github.com">GitHub.</a></p>
      </FeatureBox>
      <FeatureBox icon={faGem} title="Decentralized">
        <p>If you're like us, you hate fiat currencies; slow, paper, and prone to inflation. Decentralized (as in Garlicoin) currencies like Bitcoin and Ethereum have a limited amount on market. 69 million Garlicoin will only ever be available on market.</p>
      </FeatureBox>
    </div>
  </div>
);
