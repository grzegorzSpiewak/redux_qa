'use strict'
import React from 'react'

const ReportResult = (props) => (
  <div className={props.status === 'Failed' ? "report__result__info failed" : "report__result__info passed"}>
    <p className="report__result__info__name">Name: {props.name}</p>
    <p className="report__result__info__status">Status: {props.status}</p>
    <p className="report__result__info__icon">
      {
        props.status === 'Failed' ?
        <i className="fa fa-info-circle" aria-hidden="true" id={props.index} onClick={props.onClick}></i>
        :
        <i className="fa fa-check-circle" aria-hidden="true"></i>
      }
    </p>
  </div>
)

export default ReportResult
