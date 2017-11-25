import React from 'react'
import './style.scss'

const Project = (props) => {
  let projectColor = {
    backgroundColor: props.projectColor
  }
  return (
    <div className={'project-main'}>

      <div className={'project-description'}>
        {props.description}
      </div>

      <div className={'project-portrait'}>
        <a className={'project-picture'} href={props.url} target='_#' style={projectColor}>
          <div className={'project-logo-name'}>
            {props.logoName}
          </div>
        </a>

        <div className={'project-banner'}>
          <div className={'project-name'}>
            {props.title}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project
