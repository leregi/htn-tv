import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FLogo from '../../svg/flogo.svg';
import { generateMedia } from 'styled-media-query';
import { Formik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import { connect } from 'react-redux';
import { INCREMENT } from '../../redux/actions/types';
import { login } from '../../redux/actions/actionCreators';
import Api from '../../services/api'; 
/**
* @author
* @class 
**/

// console.log(store.getState())
const mapStateToProps = state => {
    return { 
        authCredentials : state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth : authData => dispatch(login(authData))
    }
}

const initialValues = {
    email: '',
    password: ''
}

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required("Enter a Valid Email"),
    password: Yup.string()
        .min(4)
        .required("Must must have 4 character")
})


class LoginForm extends Component {

    componentDidMount(){
        // this.props.auth('Test');
    }

    render() {
        console.log(this.props)
            return (
                <div>
                    < FormContainer >
                        <div className = "form-container">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={loginSchema}
                                onSubmit={(values) => {
                                    
                                //    console.log(values.email, values.password)
                                   const result = Api.login(values.email, values.password);
                                   result.then(res => {
                                    //    console.log( res.data );
                                       this.props.auth(res.data.jwt);
                                   });
                                   
                                   console.log(this.props.authCredentials);
                                   
                                }}
                                
                            render = {({errors, touched, values, handleSubmit, handleChange }) => {
                                    return (
                                            <form onSubmit={handleSubmit}>
                                                    <h1>Sign In</h1>
                                                    <div className="input-container">
                                                        <input 
                                                            className= "input-empty"
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            value={values.email}
                                                            onChange={handleChange} 
                                                            required
                                                        />
                                                            
                                                        {/* <label>Email or Phone Number</label>
                                                        <span style={{color: '#B589D6'}}>Email Error</span> */}
                                                    </div>
                                                    <div className="input-container">
                                                        <input 
                                                            className="input-empty" 
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            value={values.password}
                                                            onChange={handleChange} 
                                                            required
                                                        />
                                                            
                                                            {/* <label>Password</label>
                                                            <span style={{color: '#B589D6'}}>password Error</span> */}
                                                    </div>
                                                    <div className="input-container">
                                                        <Button type="submit">Sign In</Button>
                                                    </div>

                                                    <label className="checkbox-container">
                                                        Remember me 
                                                        <input type="checkbox" defaultChecked="" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <Link to="/" className="need-help">Need Help?</Link>
                                                    <div className="bottom-form">
                                                        <img src={FLogo} alt="facebook" />
                                                        <Link to="/" className="login-fb-text">
                                                            Login With Facebook
                                                        </Link>
                                                        <br />
                                                        <br />
                                                        <span style={{color: '#999'}}>New to HTN?</span>
                                                        <Link to="/" className="sign-up-text">
                                                            &nbsp;<Link to="/register">Sign Up Now</Link>
                                                        </Link>
                                                    </div>
                                            </form>         
                                    )}}>
                            </Formik>
                        </div>
                    </FormContainer>
                </div>
            );
        }
}
 


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

// Media Login Form
const customMedia = generateMedia({
    tablet: '640px'
})
// Form Container
const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 1;
  top: -180px;
  ${customMedia.lessThan('tablet')`
  border-bottom: 0.9px solid #999;
 `}

  .form-container {
      background: rgba(0, 0, 0, 0.8);
      position: relative;
      width: 28.125rem;
      height: 38.25rem;
      padding: 4rem;
      ${customMedia.lessThan('tablet')`
       padding: 0.6rem;
       height: 35rem;
      `}
  }

  .input-container {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 1.2rem;
  }

  .input-empty {
      color: #fff;
      background: #333;
      border: 0;
      border-radius: 0.25rem;
      height: 3rem;
      padding: 0.9rem 1.23rem 0;
  }

  form div label {
      position: absolute;
      top: 0.625rem;
      left: 1.25rem;
      poiner-events: none;
      color: #8a8a8a;
      font-size: 1rem;
      transition: tranform 150ms ease-out, font-size 150ms ease-out;
  }

  form div {
      position: relative;
  }

  input:focus ~ label {
      top: 0.4375rem;
      font-size: 0.7rem;
  }

  input:focus {
      outline: none;
  }

  .input-error {
      border-bottom: 1px solid #B589D6;
  }

  // Checkbox
  .checkbox-container {
      margin-left: 0.75rem;
      padding-left: 1.875rem;
      position: relative;
      font-size: 0.9rem;
      color: #999;
      cursor: pointer;
  }

  .checkbox-container input {
      display: none;
  }

  .checkbox-container.checkmark {
      display: inline-block;
      background: #454545;
      width: 1.1rem;
      height: 1.1rem;
      left: 0;
      top: 0;
      border-radius: 0.1rem;
      position: absolute;
  }

  .checkbox-container input:checked + .checkmark:after {
      content: '';
      position: absolute;
      height: 0.25rem;
      width: 0.625rem;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      top: 25%;
      left: 21%;
      transform: rotate(-45deg);
  }

  .need-help {
      text-decoration: none;
      color: #828282;
      margin-left: 6.6rem;
      font-size: 0.9rem;
      &:hover {
          text-decoration: underline;
      }
      ${customMedia.lessThan('tablet')`
       margin-left: 13rem;
      `}
  }

  // Bottom Form
  .bottom-form img {
      width: 1.5625rem;
      margin: 0.625rem 0.625rem -0.4375rem 0;
  }

  .login-fb-text{
      color: #828282;
      font-size: 0.9rem;
  }

  .bottom-form {
      position: absolute;
      bottom: 0;
      margin-bottom: 5rem;
  }

  // Sign Up
  .sign-up-text {
      font-size: 1.1rem;
      color: #fff;
      &:hover {
          color: #B589D6;
      }
  }
`;

// Button
const Button = styled.button`
 color: #fff;
 background: #800080;
 border: none;
 outline: none;
 padding: 0.8rem 1.3rem;
 border-radius: 0.125rem;
 font-size: 1rem;
 text-align: center;
 box-shadow: 0 1px 0 rgba(0,0,0,0.45);
 transition: opacity .2s ease-in;
 cursor: pointer;
 text-decoration: none;
 margin: 1rem 0;
`;
