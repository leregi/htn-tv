import React, { Component } from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pricing from './payment/Pricing'

/**
* @author
* @class 
**/

class Plan extends Component {
 render() {
  return(
    <PlanComponent className="plan-container" >
    <div className="header-top">
        <Logo src={logo} alt="logo" className="logo" />
        <NavLink to="/login" className="signIn-btn">Sign In</NavLink>
    </div>
    <div className="container">
        <div className="center-container">
            <div className="form-plan-container">
                <span className="step-indicator">STEP 1 OF 3</span>
                <h1 className="title">Find the perfect plan for you </h1>
                <p className="text">You will get Premiun for free during your first 30 days</p>
            </div>
        </div>
    </div>
    <Pricing />
</PlanComponent>
    )
   }
 }


export default Plan;

// Plan Component
const PlanComponent = styled.div`
 border-bottom: 1px solid #e6e6e6;
 height: 80px;

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

.container {
    padding-bottom: 95px;
}

.center-container {
    display: block;
    transform: none;
    opacity: 1;
    transition-duration: 250ms;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    padding: 20px 32px 60px;
    margin: 0 auto 15px;
    max-width: 978px;
    box-sizing: border-box;
}

.form-plan-container {
    color: #000;
    margin-top: -3%;
}

.form-plan-container .step-indicator {
    line-height: 27px;
    text-align: inherit;
    font-size: 13px;
    display: block;
}

.title {
    display: inline-block;
    font-weight: bold;
    font-size: 23px;
}

.text {
    margin-bottom: 20px;
    margin-top: 4px;
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