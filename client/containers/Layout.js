'use strict'
import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Layout extends React.Component {

  render () {
    return (
      <div>
        <Header {...this.props.homepage.header}/>
          { React.cloneElement(this.props.children, this.props) }
        <Footer />
      </div>
    )
  }
}
