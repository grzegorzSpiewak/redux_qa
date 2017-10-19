'use strict'
import React from 'react'
import { Link } from 'react-router'

import Informations from '../components/Informations'
import Select from '../components/Select'

export default class Summary extends React.Component {

  render () {
    return (
      <div className="page">
        {console.log(this.props)}
        <p>This is summary page<i className='fa fa-home' aria-hidden='true'></i></p>
      </div>
    )
  }
}
