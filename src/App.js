import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Footer } from './components/common/Footer';
import { GlobalStyle } from './components/GlobalStyles';
import AboutPage from './components/static/AboutPage';
import HelpPage from './components/static/HelpPage';
import PrivacyPage from './components/static/PrivacyPage';

function App() {

  return (
    <>
      <GlobalStyle/>
      <h1>Reactgram</h1>
      <Router>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/help">
            <HelpPage/>
          </Route>
          <Route path="/privacy">
            <PrivacyPage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
