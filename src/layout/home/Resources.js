import React from 'react'

import Link from 'gatsby-link'
// import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
// import Icon from 'src/components/Icon'

export default () => (
  <div className="mainResources section">
    <h1 className="title">Ready for Life</h1>
    <h2 className="subTitle">With a host of online resources, Garlicoin is ready for real-world implementation.</h2>
    <div className="band">
      <a href="https://medium.com/@retosen.dev/important-information-regarding-fridays-allium-hard-fork-f48045379eff" target="_blank" rel="noopener noreferrer" className="card">
        <h1>Latest Blog Post</h1>
        <p>Important Information Regarding Friday’s Allium Hard Fork. (Feb 15)</p>
        <p>Click to read.</p>
      </a>
      <a href="/resources" className="card">
        <h1>User and Developer Resources</h1>
        <p>Garlic Recipes.</p>
      </a>
      <span className="card">
        <h1>Shop</h1>
        <p>Coming soon.</p>
      </span>
      <span className="card">
        <h1>Forum</h1>
        <p>Coming soon.</p>
      </span>
    </div>
  </div>
);
