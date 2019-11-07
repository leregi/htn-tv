import React, { Component } from 'react'
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle';
import { Icon }from 'react-icons-kit';
import {ic_done} from 'react-icons-kit/md/ic_done'
import styled from 'styled-components';
import { Button } from '../Button';
import { Link } from 'react-router-dom'
/**
* @author
* @class 
**/

class RegisterInfo extends Component {
 render() {
  return(
   <InfoContainer>
       <div className="info-container">
           <div className="check">
               <center> <Icon className="Icon" icon={ic_check_circle} size={40} /> </center>
           </div>
           <div className="choose-container">
               <div className="choose">
                   <span className="step-indicator">STEP 1 OF 3</span>
                   <h1 style={{fontSize: '27px', margin: '0 0 .4em'}}>Choose a plan.</h1>
               </div>
           </div>
           <br />
           
            <center style={{display: 'block'}}>
                <div style={{ color: '#8A2BE2' }}>
                    <Icon size={30} icon={ic_done}/>
                    <text style={{ color: '#000'}}>100% satisfaction guaranteed.</text>
                </div>
                <br />
                <div style={{ color: '#8A2BE2' }}>
                    <Icon size={30} icon={ic_done}/>
                    <text style={{ color: '#000'}}> Everything on Netflix for one low price.</text>
                </div>
                <br />
                <div  style={{ color: '#8A2BE2' }}>
                    <Icon size={30} icon={ic_done} />
                    <text style={{ color: '#000'}}> Unlimited viewing on all your devices.</text>
                </div>
            </center>
            <center><Button type="submit" className="register-plan-btn">
              <Link to="/plan">See The Plan</Link>
            </Button></center>
       </div>
   </InfoContainer>
    )
   }
 }


export default RegisterInfo;

// Form Container
const InfoContainer = styled.div`

  .check{
      color: var(--main-purple);
      padding: 30px;
      
  }

  .choose {
      color: #000;
      text-align: inherit;
      font-size: 13px;
      display: block;
      line-height: 19px;
      justify-content: center;
      text-align: center;
  }

  .register-plan-btn{
    margin: 0;
    padding: 0.75rem 25.33333333px;
    font-weight: 400;
    line-height: normal;
    border-radius: 2px;
    font-size: 1rem;
    background: var(--main-purple);
    cursor: pointer;
    margin-top: 24px;
    width: 25%;
    &:hover {
        background: var(--main-purple-hover);}
  }
`;