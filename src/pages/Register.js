import React, { Component } from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import RegisterInfo from '../components/register/RegisterInfo'
import styled from 'styled-components'



/**
* @author
* @class 
**/

class Register extends Component {
 render() {
  return(
    <RegisterComponent className="register-container" >
        <div className="header-top">
            <Logo src={logo} alt="logo" className="logo" />
            <NavLink to="/login" className="signIn-btn">Sign In</NavLink>
        </div>
        <RegisterInfo />
    </RegisterComponent>
    )
   }
 }


export default Register;

// Register Component
const RegisterComponent = styled.div`
 border-bottom: 1px solid #e6e6e6;
 height: 80px;
 background: #fff;

 // Header Top
 .header-top {
     position: relative;
     height: 10rem;
     z-index: 1;
 }

 // Sign In btn
.signIn-btn{
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-purple);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
        background: var(--main-purple-hover);
    }
}
`;

// Logo
const Logo = styled.img`
width: 10rem;
height: 3.5rem;
position: absolute;
top: 20%;
right: 80%;
transform: translate(-50%, -50%);
margin-left: 0;
`;