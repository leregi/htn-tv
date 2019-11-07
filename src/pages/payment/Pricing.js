import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from '../../components/Button';

/**
* @author
* @class 
**/

class Pricing extends Component {
 render() {
  return(
   <PricingComponent className='pricing'>
       <div id="price">
           <div class="plan basic">
               <div class="plan-inner">
                   <div class="entry-title">
                       <h3>Basic Plan</h3>
                       <div class="price">$10.99<span></span>
                       </div>
                   </div>
                   <div class="entry-content">
                       <ul>
                           <li><strong>No</strong>&nbsp;credit card on file</li>
                           <li><strong>2TV</strong>Unlimited content</li>
                           <li><strong>No</strong>&nbsp;Tech Support</li>
                           <li><strong>Limited Featured Content</strong>&nbsp;For Live TV</li>
                           <li><strong>Limited Featured Contend</strong>&nbsp;Live Radio</li>
                       </ul>
                   </div>
                   <div class="btn">
                   <a href="/registration">Select Plan</a>
                   </div>
               </div>
           </div>
           
           <div class="plan standard">
               <div class="plan-inner">
                   <div class="entry-title">
                       <h3>Standard Plan</h3>
                       <div class="price">$9.95<span>/Month</span>
                       </div>
                   </div>
                   <div class="entry-content">
                       <ul>
                           <li><strong>Credit</strong>&nbsp;Card On file</li>
                           <li><strong>2</strong>&nbsp;TV</li>
                           <li><strong>24/7</strong>&nbsp;Technical Support</li>
                           <li><strong>Limited Featured Content</strong>&nbsp;For Live TV</li>
                           <li><strong>Limited Featured Contend</strong>&nbsp;Live Radio</li>
                       </ul>
                   </div>
                   <div class="btn">
                   <a href="/registration">Select Plan</a>
                   </div>
                </div>
            </div>
            
            <div class="plan ultimite">
                <div class="plan-inner">
                    <div class="hot">popular</div>
                    <div class="entry-title">
                        <h3>Premium</h3>
                        <div class="price">$14.95<span>/Month</span>
                        </div>
                    </div>
                    <div class="entry-content">
                        <ul>
                            <li><strong>Credit</strong>&nbsp;Card On file</li>
                            <li><strong>4</strong>TV</li>
                            <li><strong>24/7</strong>&nbsp;Technical Support</li>
                            <li><strong>Unlimited Content</strong>&nbsp;For Live TV</li>
                           <li><strong>Unlimited Contend</strong>&nbsp;For Live Radio</li>
                        </ul>
                   </div>
                   <div class="button">
                     <a href="/registration">Select Plan</a>
                    </div>
                </div>
            </div>
       </div>
    </PricingComponent>
    )
   }
 }


export default Pricing;

// Pricing Table
const PricingComponent = styled.div`
  color: black;
  

  #price {
    text-align: center;
    margin-top: -160px;
  }
  
  .plan {
    display: inline-block;
    margin: 10px 1%;
    font-family: 'Lato', Arial, sans-serif;
  }
  
  .plan-inner {
    background: #fff;
    margin: 0 auto;
    min-width: 280px;
    max-width: 100%;
    position:relative;
  }
  
  .entry-title {
    background: #53CFE9;
    height: 140px;
    position: relative;
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
  }
  
  .entry-title>h3 {
    background: #20BADA;
    font-size: 20px;
    padding: 5px 0;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }
  
  .entry-title .price {
    position: absolute;
    bottom: -25px;
    background: #20BADA;
    height: 95px;
    width: 95px;
    margin: 0 auto;
    left: 0;
    right: 0;
    overflow: hidden;
    border-radius: 50px;
    border: 5px solid #fff;
    line-height: 80px;
    font-size: 28px;
    font-weight: 700;
  }
  
  .price span {
    position: absolute;
    font-size: 9px;
    bottom: -10px;
    left: 30px;
    font-weight: 400;
  }
  
  .entry-content {
    color: #323232;
    
  }
  
  .entry-content ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  
  .entry-content li {
    border-bottom: 1px solid #E5E5E5;
    padding: 10px 0;
    color: grey;
  }
  
  .entry-content li:last-child {
    border: none;
  }
  
  .btn {
    padding: 3em 0;
    text-align: center;
  }
  
  .btn a {
    background: #DDA0DD;
    padding: 10px 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    &:hover {
        background: var(--main-purple-hover);
    }
  }

  .button {
    padding: 3em 0;
    text-align: center;
  }
  
  .button a {
    background: var(--main-purple);
    padding: 10px 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    &:hover {
        background: var(--main-purple-hover);
    }
  }
  .hot {
      position: absolute;
      top: -7px;
      background: red;
      color: #fff;
      text-transform: uppercase;
      z-index: 2;
      padding: 2px 5px;
      font-size: 9px;
      border-radius: 2px;
      right: 10px;
      font-weight: 700;
  }
  .basic .entry-title {
    background: #D8BFD8;
  }
  
  .basic .entry-title > h3 {
    background: #DDA0DD;
  }
  
  .basic .price {
    background: #D8BFD8;
  }
  
  .standard .entry-title {
    background: #D8BFD8;
  }
  
  .standard .entry-title > h3 {
    background: #DDA0DD;
  }
  
  .standard .price {
    background: #DDA0DD;
  }
  
  .ultimite .entry-title > h3 {
    background: #9932CC;
  }
  
  .ultimite .entry-title {
    background: var(--main-purple);
  }
  
  .ultimite .price {
    background: #9932CC;
  }
`;