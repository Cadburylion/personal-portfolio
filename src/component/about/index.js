import React from 'react'
import './styles.scss'

export default class About extends React.Component{
  render() {
    return(
      <div className='about-main'>



        <div className='about-content'>
          <div className='about-avatar'>
            <img src={require('../../assets/matt-profile.png')} />

          </div>
          <p className='about-first-paragraph'>
          I am a React & Full-Stack Developer, graduate of <a href='https://www.codefellows.org' target='_#'>{'Code Fellows\''}</a> advanced JavaScript program, and creative writer. When I decided to pursue a career in web development, I quit my job of 5 and a half years in Olympia and moved to Seattle to dedicate myself to learning these new skills. Now with clean code, modern design, and industry standard tools, I build responsive Full-Stack applications.
          </p>

          <p>For clients and employers I am a developer who can provide:</p>
          <ul>
            <li className='about-list-title'>Responsive Websites</li>
            <li className='about-list-title'>
              Front-end Development
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>
                  JavaScript
                  <ul>
                    <li>jQuery</li>
                    <li>React</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='about-list-title'>
              Back-end development
              <ul>
                <li>Node</li>
                <li>MongoDB</li>
                <li>RESTful architecture</li>
              </ul>
            </li>
          </ul>

          <p>

          </p>

          <h2>Skills</h2>

          <h3>Front-end Developer</h3>

          <div className='about-language-logos'>
            <div className='about-language-logo'>
              <img src={require('../../assets/javascript-original.svg')} alt='javascript logo' />
              <strong> JavaScript </strong>
            </div>

            <div className='about-language-logo'>
              <img src={require('../../assets/react-original.svg')} alt='react logo' />
              <strong> React </strong>
            </div>

            <div className='about-language-logo'>
              <img src={require('../../assets/html5-original.svg')} alt='html 5 logo'/>
              <strong> HTML5 </strong>
            </div>



          </div>

          <div className='about-front-end-logos'>

          <div className='about-language-logo'>
            <img src={require('../../assets/css3-original.svg')} alt='css 3 logo' />
            <strong> CSS3 </strong>
          </div>

            <div className='about-language-logo'>
              <img src={require('../../assets/sass-original.svg')} alt='sass logo' />
              <strong> Sass </strong>
            </div>
          </div>

          <h3>Back-end Developer</h3>

          <div className='about-language-logos'>
            <div className='about-language-logo'>
              <img src={require('../../assets/nodejs-original.svg')} alt='node logo' />
              <strong> Node </strong>
            </div>

            <div className='about-language-logo'>
              <img src={require('../../assets/mongodb-original.svg')} alt='mongo db logo'/>
              <strong> MongoDB </strong>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
