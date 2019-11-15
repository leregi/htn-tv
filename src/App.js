import React, { Component} from 'react';
import './css/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages';
import Login from './pages/Login';
import Plan from './pages/Plan'
import Register from './pages/Register';
import Registration from './pages/Registration';
import RegisterForm from './pages/RegisterForm';
import Membership from './pages/payment/Membership';
import Credit from './pages/payment/Credit'


import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    authCredentials: state.auth
  }
}


class App extends Component {

  ProtectedRoutes = () => {
    
    if (this.props.authCredentials.isLogged){
      return (
        <>
          <Route path = "/membership"component = {Membership} />
          <Route path="/credit" component={Credit} />
        </>
      )
    }else
    {
      return < Redirect to = "/login" />
    }
  }

  componentDidMount() {
    console.log(this.props.authCredentials , "merde")
  }
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/plan" component={Plan} />
          <Route path="/registration" component={Registration} />
          <Route path="/regform" component={RegisterForm} />
          {this.ProtectedRoutes()}
        </Switch>
    );
  }
}



export default connect(mapStateToProps, null)(App);

