import React from 'react'
import styled from 'styled-components';

function FooterMenu() {
    return (
        <FooterMenuComponent className="footer-menu">
           <p><i>Copyright ©2019 The trademark of Haitian TV Network and its associates </i>| &nbsp;<a href="#" target=""><b>Alexeus Productions </b></a></p>
        </FooterMenuComponent>
    )
}

export default FooterMenu;

const FooterMenuComponent = styled.div`
  a {
    color: purple;
  }

  a:hover {
      text-decoloration: underline;
      cursor: pointer;
  }

`;
