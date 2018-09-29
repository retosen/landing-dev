import React from 'react'

import Link from 'gatsby-link'

export default () => (
  <div className="mainResources section">
    <h1 className="title">Ready for Life</h1>
    <h2 className="subTitle">With a host of online resources, Garlicoin is ready for real-world implementation.</h2>
    <div className="band">
      <a href="https://medium.com/@retosen.dev/an-explanation-3119e44407ba" target="_blank" rel="noopener noreferrer" className="card">
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
);
