import React, { Component } from 'react'
import HeadForm from '../../components/register/HeadForm'
import Options from '../payment/Options'
import { Icon } from 'react-icons-kit'
import {ic_lock_outline} from 'react-icons-kit/md/ic_lock_outline'
import styled from 'styled-components'

/**
* @author
* @class 
**/

class Membership extends Component {
 render() {
  return(
   
   <MembershipComponent>
       <HeadForm/>
       <div class="simple-container">
           <div class="center-container">
               <div className="payment-container">
                   <div className="head">
                       <div className="icon">
                           <center><Icon className="Icon" icon={ic_lock_outline} size={40} /></center>
                       </div>
                       <div className="step-container">
                           <div className="step-head">
                               <span className="step-indicator">
                                   STEP 3 OF 3
                               </span>
                               <h1 style={{fontSize: '27px', margin: '0 0 .4em', marginTop: '20px'}}>Set up your Payment</h1>
                           </div>
                       </div>
                       <div className="content">
                           <div className="text">
                           We offer a variety of membership options to meet your budget or your need.
                           
                           <div className="info">
                               <b>Start with us as soon as you set up your payment.</b>
                           </div>
                           </div>
                       </div>
                   </div>
                   <Options />
               </div>
           </div>
       </div>

   </MembershipComponent>
    )
   }
 }


export default Membership; 

// Membership Component
const MembershipComponent = styled.div`
  .icon{
      color: var(--main-purple);
      padding: 40px;
  }


.step-head {
    color: #000;
    text-align: inherit;
    font-size: 13px;
    display: block;
    line-height: 19px;
    justify-content: center;
    text-align: center;
   }

.content{
    max-width: 260px;
    margin: 0 auto;
    color: #000;
    justify-content: center;
    text-align: center;
 }

.text{
    margin-top: 40px;
 }

 .info{
     margin-top: 30px;
     
 }
`;