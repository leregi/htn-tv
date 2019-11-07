import React, { Component } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
/**
* @author
* @class 
**/

class LoginFooter extends Component {
 render() {
  return(
   <FooterContainer>
       <div className="footer-columns">
       <b>Copyright ©2019 </b>The trademark of Haitian TV Network and its associates | <i>Alexeus Productions</i>
       </div>
   </FooterContainer>
    )
   }
 }

export default LoginFooter; 

// Media
const custMedia = generateMedia({
    tablet: '740px'
})

// Main Footer Container
const FooterContainer = styled.footer `
 justify-content: center;
 background: rgba(0, 0, 0, 0.8);
 opacity: 0.5;
 padding-top: 3rem;
 padding-bottom: 2rem;
 text-align: center;
 position: relative;
 z-index:1;
`