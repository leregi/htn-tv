import React, { Component } from 'react'
import { Link } from 'react-dom';
import Img from '../images/htn.png';
import SocialFollow from './SocialFollow';
import FooterMenu from './FooterMenu';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query'

/**
* @author
* @class 
**/

class Footer extends Component {
 render() {
  return(
   <FooterComponent className="footer-container" style={{backgroundColor: 'var(--main-dark)'}}>
     <br /><br />
       <div className="footer-top">
       <img src={Img}  style={{width: '10rem'}}/>
       </div>
       <SocialFollow />
       <FooterMenu />
   </FooterComponent>
    )
   }
 }

export default Footer;

// Media Tab
const customMedia = generateMedia({
  tablet: '740px'
})

const FooterComponent = styled.div`
justify-content: center;
align-content: center;
text-align: center;
`;