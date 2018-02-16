import React from 'react'
import Link from 'gatsby-link'

import Logo from '../svg/Logo'

export default () => (
  <div className="footer">
    <div className="mainFooter">
      <div className="emailSignup">
        <div className="emailOverlay">COMING SOON.</div>
        <input type="email" name="EMAIL" placeholder="Email Address" />
        <button type="submit" className="btn-blue" name="subscribe">Sign Up</button>
      </div>
      <Link to="/"><Logo class="footerIcon" /></Link>
      <div id="colWrapper">
        <ul className="col">
          <li>Services</li>
          <li>
            <a href="https://explorer.garlicoin.io">Explorer</a>
          </li>
          <li>
            <a href="https://pandawanfr.github.io/GarlicRecipes/">Garlic Recipes</a>
          </li>
        </ul>
        <ul className="col">
          <li>Community</li>
          <li>
            <a href="https://garlicoin.reddit.com" target="_blank">
              Reddit
            </a>
          </li>
          <li>
            <a href="https://discord.gg/nZWHe33" target="_blank">
              Discord Server
            </a>
          </li>
        </ul>
        <ul className="col">
          <li>Help</li>
          <li><Link to="/onboarding">Resources</Link></li>
          <li>
            <a href="mailto:garlicoindevs@gmail.com">
              garlicoindevs@gmail.com
            </a>
          </li>
          <li>FAQ (coming soon.)</li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      © 2018 by Garlicoin Org. All rights reserved
      <span>
		        <Link to="/">Terms of Use </Link>
            | <Link to="/">Privacy Policy </Link>
            | <Link to="/">DMCA Policy </Link>
            | <Link to="/">Disclaimer</Link>
      </span>
    </div>
  </div>
);
