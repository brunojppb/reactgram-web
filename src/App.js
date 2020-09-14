import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AboutPage from './components/static/AboutPage'

function App() {
  return (
    <div className="App">
      <h1>Reactgram</h1>
      <Router>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
