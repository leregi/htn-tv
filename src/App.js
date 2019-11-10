import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './pages';
import Login from './pages/Login';
import Plan from './pages/Plan'
import Register from './pages/Register';
import Registration from './pages/Registration';
import RegisterForm from './pages/RegisterForm';
import Membership from './pages/payment/Membership';
import Credit from './pages/payment/Credit'


function App() { 
  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/plan" component={Plan} />
        <Route path="/registration" component={Registration} />
        <Route path="/regform" component={RegisterForm} />
        <Route path="/membership" component={Membership} />
        <Route path="/credit" component={Credit} />
      </Switch>
  );
}

export default App;

