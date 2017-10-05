'use strict'
import React from 'react'
import { Link } from 'react-router'

import Informations from '../components/Informations'
import Select from '../components/Select'

export default class Main extends React.Component {

  render () {
    return (
      <div className="container__wrap">
        <Informations {...this.props.homepage.informations} />
        <Select {...this.props.homepage.select} />
      </div>
    )
  }
}
