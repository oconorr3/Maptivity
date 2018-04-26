import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './styles/App.css';
import HomePage from './components/HomePage.jsx';
import MapPage from './components/MapPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

export default class App extends React.Component {
  componentDidCatch(error, info) {
    alert(`Unexpected Error Occured: ${error.message} \n\n refreshing page`);
    window.location.reload();
  }

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
