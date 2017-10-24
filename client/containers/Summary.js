'use strict'
import React from 'react'
import { Link } from 'react-router'

import Informations from '../components/Informations'
import Report from '../components/Report'
import Animated from '../components/Animated'

export default class Summary extends React.Component {

  render () {
    return (
      <div className="page">
        <Animated transitionName={'show'} className={'summary'} component={'section'}>
          <Report />
        </Animated>
      </div>
    )
  }
}
