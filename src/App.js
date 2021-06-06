import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <>
        <Route exact path="./index.html" component={Home} />
        <Switch>
          <Route path="/Skills" component={Skills} />
          <Route path="/Education" component={Education} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Portfolio" component={Portfolio} />
        </Switch>
      </>
    </Router>

  );
}

export default App;
