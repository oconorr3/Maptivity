import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styles from './styles.css';

import Home from './components/Home.jsx';
import RegisterPage from './components/RegisterPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import NotFoundPage from './components/NotFoundPage.jsx';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={LoginPage}/>
          <Route path="/register" component={RegisterPage} />
          <Route path='*' component={NotFoundPage}/>
        </Switch>
      </Router>
    );
  }
}
