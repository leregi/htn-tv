import React from 'react';
import Img from '../images/unsubscribe.png'
import {Button} from './Button';
import styled from 'styled-components';
import {generateMedia} from 'styled-media-query'; 
/**
* @author
* @function 
**/

function TabContent() {
  return(
      <TabContentContainer>
          <div className="container">
              <div className="tab-content">
                 <div>
                   <span style={{marginBottom:'2rem'}}>
                     Unsubscribe online at any time you want.
                   </span>
                   <br /> <br />
                   <Button className="title" style={{marginBottom: '2rem'}}>Get started</Button>
                  </div>
                  <img src={Img} />
                </div>
            </div>
        </TabContentContainer>
   )
  }

export default TabContent;

// Media Query
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px'
})

// Content
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  
  .container{
    margin: 0 10%;
  }
  img {
      width: 31.875rem;
  }

  .title {
    margin-top: 2rem;
    ${customMedia.lessThan('smDesktop')`
     font-size: 1.5rem;
     line-height:1;
    `}
  }

  .tab-content {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      grid-gap: 2rem;
      aligm-items: center;
      font-size: 2rem;
      padding: 2.5rem;
      ${customMedia.lessThan('tablet')`
       grid-template-columns: 100%;
       text-align: center;
       padding-left: 0;
       padding-right: 0;
      `}
  }

`;