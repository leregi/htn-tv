import React from 'react'
import { Button } from './Button';
import styled from 'styled-components';
import ImgTv from '../images/l-1.png'
import ImgMobile from '../images/l-2.png'
import ImgDesktops from '../images/l-3.png'
import {generateMedia} from 'styled-media-query'; 

function TabContentOne() {
    return ( 
       <TabContainer>
           <br /><br /> <br />
           <div className="tab-content">
               <div className-="tab-top-content">
                   <span style={{fontSize: '1.5rem'}}>Watch TV shows, movies, Live TV an Radio anytime, anywhere–personalized for you</span>
                   <Button className="btn">Get Started</Button>
                </div>
                   {/* Tab Bottom Content */}
                   <div className="tab-bottom-content">
                       {/* TV Img Container */}
                       <div>
                           <img src={ImgTv} style={{width: '18.75rem'}}/>
                           <h3>On large screen</h3>
                           <p>Smart TVs, Android TV, Apple TV, Blue-ray players and more.</p>
                       </div>
                       {/* Mobile Img Container */}
                       <div>
                           <img src={ImgMobile} style={{width: '18.75rem', paddingTop: '0.625rem'}}/>
                           <h3>On Mobile</h3>
                           <p>Available on phone and tablet with Android or ios, wherever you go.</p>
                       </div>
                       {/* Desktops Img Container */}
                       <div>
                           <img src={ImgDesktops} style={{width: '18.75rem', paddingTop: '0.625rem',
                           paddingBottom: '0.625rem'}}/>
                           <h3>Desktops</h3>
                           <p>Use your PC desktop or laptop no matter what size it is.</p>
                       </div>
                       
                   </div> 
                </div>
        </TabContainer>
    )
}

export default TabContentOne;

// Media Query 
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '900px'
})

// Tab Content Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
      margin: 0 15%;
  }

  // Tab Top Content
  .tab-top-content{
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      justify-content: center;
      align-item: center;
      padding: 2.5rem 0;
      ${customMedia.lessThan('smDesktop')`
       grid-template-columns: repeat(2, 1fr);
      `}

      ${customMedia.lessThan('tablet')`
       grid-template-columns: 1fr;
       text-align: center;
       row-gap: 1.5rem;
      `}
  }

  span {
      grid-columns: 1 / 8;
      ${customMedia.lessThan('tablet')`
       grid-column: 1 / -1;
       font-size: 1.5rem;
      `}
  }

  .btn {
      margin: 0 1.25rem 1.25rem;
      grid-columns: 10 / 12;
      ${customMedia.lessThan('tablet')`
       grid-column: 1/ -1;
       margin-left: 30%;
       margin-right: 30%;
      `}
  }

  img{
      width: 100%;
  }

  // Tab Bottom Content
  .tab-bottom-content{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      text-align: center;
      margin-top: 2rem;
      ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;`}
  }

  h3 {
      margin: 0.5rem 0;
  }

  p {
      color: var(--main-grey);
  }
`;