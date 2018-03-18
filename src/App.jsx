import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css'; // optional
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styles from './styles.css';
import HomePage from './components/HomePage.jsx';
import MapPage from './components/MapPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

export default class App extends React.Component {
  render() {
    return (<Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/map' component={MapPage}/>
        <Route path='*' component={NotFoundPage}/>
      </Switch>
    </Router>);
  }
}
