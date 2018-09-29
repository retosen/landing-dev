import React from 'react'

import Icon from 'src/components/Icon'

export default ({ icon, title, children }) => (
  <div className="featureBox">
    <div className="center">
      <Icon icon={icon} />
    </div>
    <div className="desc">
      <h2>{ title }</h2>
      { children }
    </div>
  </div>
)
