import React from 'react';
import { StaticLayout } from './StaticLayout';

function AboutPage() {

  return(
    <StaticLayout>
      <h1>About Page</h1>
      <p>
        React is the most popular frontend library on the market. Built by Facebook, 
        it is based on functional components which are updated automatically when a 
        state update occurs. Designed around a declarative architecture, components 
        created in React are much easier to build, debug and maintain.
      </p>
    </StaticLayout>
  )

}

export default AboutPage;