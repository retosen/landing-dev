import React from 'react'

import Icon from 'src/components/Icon'

export default ({ data }) => (
  <a href={data.link} className="downloadBtn">
    <Icon icon={data.icon} />
    <span>{data.desc}</span>
  </a>
)
