import React from 'react'

export default (props) => (
  <a href={props.data.link} className="downloadBtn">
    <i
      className={`${props.data.icon} fa-3x`}
      data-fa-transform={props.data.rotate ? `rotate-${props.data.rotate}` : 0}
      aria-hidden="true" />
    <span>{props.data.desc}</span>
  </a>
)
