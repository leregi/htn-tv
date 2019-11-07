import React, { Component } from 'react'
import logo from '../images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/Button'
// import ImgDevice from '../images/image.png'

/**
* @author
* @class 
**/

class Registration extends Component {
 state = {}
 render() {
  return(
    <RegistrationComponent className="registration-container" >
        <div className="header-top">
            <Logo src={logo} alt="logo" className="logo" />
            <NavLink to="/login" className="signIn-btn">Sign In</NavLink>
        </div>

        <div className="simple-container">
          <div className="center-container">
            <div className="context-container">
              {/* <div class="stepLogo">
              <img src={ImgDevice}/>
              </div> */}
              <div className="stepContainer">
                <div className="header">
                  <span className="step-indicator">STEP 2 OF 3</span>
                  <h1 class="Title">Create your account.</h1>
                </div>
              </div>
              <div className="content">
              HTN is the only platform that provides primarily Haitian based content including live TV, 
              live radio, movies and featured content. Whether at work or abroad, HTN is The Shortest Way HOME.
              Start this adventure with us.
              </div>
            </div>
            
          </div>
          <center><Button type="submit" className="go">
              <Link to="/regform">Continue</Link>
            </Button></center>
        </div>
    </RegistrationComponent>
    )
   }
 }


export default Registration;

const RegistrationComponent = styled.div`

border-bottom: 1px solid #e6e6e6;
 height: 80px;
 color: black;

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

.simple-container {
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
}

.center-container {
  margin: 0 auto 15px;
  max-width: 1050px;
  box-sizing: border-box;
}

.stepLogo {
  margin: 100px 0 20px;
  display: block;


}

.header {
  text-align: center;
  display: block;
}

.step-indicator {
  text-align: inherit;
    font-size: 13px;
    display: block;
    font-size: 15px;
    line-height: 19px;
}

.title{
  margin: 0 0 .4em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.content {
  text-align: center;
    max-width: 500px;
    margin: 0 auto;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.go {
  min-height: 48px;
  font-weight: normal;
  font-size: 17px;
  border-radius: 2px;
  padding: 0.75rem 25.33333333px;
  min-width: 110px;
  width: 40%;
  line-height: 19px;
  text-align: center;
  align-items: center;
  align-content: center;
  background: var(--main-purple);
}
`;

// Logo
const Logo =styled.img`
 width: 10rem;
 height: 3.5rem;
 position: absolute;
 top: 25%;
 right: 80%;
 transform: translate(-50%, -50%);
 margin-left: 0;
`;