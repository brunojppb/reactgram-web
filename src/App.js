import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyles';
import AboutPage from './components/static/AboutPage';

function App() {

  return (
    <>
      <GlobalStyle/>
      <h1>Reactgram</h1>
      <Router>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
