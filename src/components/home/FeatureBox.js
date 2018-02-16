import React from 'react'

export default (props) => (
  <div className="featureBox">
    <div className="center">
      <i className={props.icon} />
    </div>
    <div className="desc">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  </div>
)
