import React from 'react'

import App from 'src/App'
import MainHeader from 'src/components/home/MainHeader'
import Description from 'src/layout/home/Description'
import Features from 'src/layout/home/Features'
import Progress from 'src/layout/home/Progress'
import Resources from 'src/layout/home/Resources'

export default class Home extends React.Component {
  render() {
    return (
      <App wrapper="mainWrapper" page="home">
        <MainHeader />
        <Description />
        <Features />
        <Progress />
        <Resources />
      </App>
    )
  }
}
