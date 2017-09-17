import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import * as route from '../../action/route.js'
import {BrowserRouter, Link} from 'react-router-dom'

import './styles.scss'
import Home from '../home'


class Header extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    let pathname = document.location.href.split('com')[1]

    if(pathname === '/about'){
      this.props.routeToAbout()
    } else if(pathname === '/contact'){
      this.props.routeToContact()
    } else if(pathname){
      this.props.routeToPortfolio()
    }
  }

  render() {
    let aboutClass = this.props.route === '/about' ? 'about current' : 'about'
    let portfolioClass = this.props.route === '/' ? 'portfolio current' : 'portfolio'
    let contactClass = this.props.route === '/contact' ? 'contact current' : 'contact'

    return(

      <div className='header-field'>
      <h2 id='header-top'></h2>

        <Link to='/' className='logo-field' onClick={this.props.routeToPortfolio}>
          <div className='running-lion'></div>
          <div className='logo-name'>
            <h1> Matthew Parker </h1>
            <h2> React & Full-Stack Developer </h2>
          </div>
        </Link>

        <nav className='nav-field'>
          <ul>
            <li>
                <Link to='/about' className={aboutClass} onClick={this.props.routeToAbout}> About </Link>
            </li>
            <li>
                <Link to='/' className={portfolioClass} onClick={this.props.routeToPortfolio}> Portfolio </Link>
            </li>
            <li>
                <Link to='/contact' className={contactClass} onClick={this.props.routeToContact}> Contact </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  routeToAbout: () => dispatch(route.switchRoute('/about')),
  routeToPortfolio: () => dispatch(route.switchRoute('/')),
  routeToContact: () => dispatch(route.switchRoute('/contact')),
  routeToSwitch: (desiredRoute) => dispatch(route.switchRoute(desiredRoute)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
