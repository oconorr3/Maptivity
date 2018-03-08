import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styles from './styles.css';

import Home from './components/Home.jsx';
import AppNavbar from './components/AppNavbar.jsx';
import Datamap from './components/Datamap.jsx'
import NotFoundPage from './components/NotFoundPage.jsx';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Datamap}/>
          <Route path='*' component={NotFoundPage}/>
        </Switch>
      </Router>
    );
  }
}
