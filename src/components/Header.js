import React, { Component } from 'react'
import logo from '../svg/logo.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button';
import { generateMedia } from "styled-media-query";
/**
* @author
* @class 
**/

class Header extends Component {

 render() {
  return(
   <HeaderComponent className="header-container">
       <div className="header-top">
           <Logo src={logo} />
           <NavLink to="/login" className="signIn-btn">Sign In</NavLink>
       </div>

       {/* Header Content */}
       <div className="header-content">
           <Title>Haitian TV Network</Title>
           <br/><br />
           <SubTitle>The best platform to watch Haitian TV</SubTitle>

           <Button className="main-offer-btn" primary>
              <NavLink to="/register">Get Started </NavLink>
            </Button>
       </div>

   </HeaderComponent>
    );
   }
 }


export default Header;

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: "960px",
    smTablet: "740px"
  });

//Logo
const Logo =styled.img`
 width: 10rem;
 height: 3.5rem;
 position: absolute;
 top: 25%;
 right: 80%;
 transform: translate(-50%, -50%);
 margin-left: 0;
 ${customMedia.lessThan('tablet')`
  left: 20%; `}
`;

//Header Component
const HeaderComponent = styled.div`
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
      ${customMedia.lessThan('smTablet')`
      margin-top: 1.25rem;
      right: 5%`}
  }

  // Header Top
  .header-top {
      position: relative;
      height: 10rem;
      z-index: 1;
  }

  // Header Content
  .header-content{
      position: relative;
      width: 65%;
      margin: 4.5rem auto 0;
      display: flex;
      justify-content: center;
      align-content: center;
      text-align: center;
      flex-direction: column;
      z-index: 2;
      ${customMedia.lessThan('smTablet')`
      display: grid;
      grid-template-rows: repeat (3, 60px);
      margin-top: 8rem;`}
  }

  .Icon svg {
      vertical-align: bottom !important;
      margin-left: 0.2rem;
      ${customMedia.lessThan('smTablet')`
      display:none !important;`}
  }

  .main-offer-btn {
      ${customMedia.lessThan('lgDesktop')`
      margin: 0 33%;
      font-size: 1.5rem;`}

      ${customMedia.lessThan('mdDesktop')`
      margin: 0 25%;
      font-size: 1.5rem;`}

      ${customMedia.lessThan('tablet')`
      margin: 0 20%;
      font-size: 1.3rem;`}
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1rem;
  ${customMedia.lessThan('tablet')`
  font-sie: 2.6rem;`}
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25rem;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan('smTablet')`
  font-size: 1.4rem;
  margin: 0;`}
  `