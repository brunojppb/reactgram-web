import React from 'react'
import aboutSvg from '../../img/about.svg'
import '../../style/static/main.css'

function AboutPage() {
  return (
    <div className="static-page-wrapper">
      <img src={aboutSvg} alt="about" className="static-page-img" />
      <h1>About Page</h1>
      <p>
        React is the most popular frontend library on the market. Built by
        Facebook, it is based on functional components which are updated
        automatically when a state update occurs. Designed around a declarative
        architecture, components created in React are much easier to build,
        debug and maintain.
      </p>
    </div>
  )
}

export default AboutPage
