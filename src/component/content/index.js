import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import About from '../about/index.js'
import Contact from '../contact/index.js'
import Portfolio from '../portfolio/index.js'
import ViewCover from '../view-cover/index.js'
import './style.scss'

export default class Content extends React.Component {
  render(){
    return(
      <div className='content-main'>
        <ViewCover />
      </div>
    )
  }
}
