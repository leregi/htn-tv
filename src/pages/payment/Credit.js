import React, { Component } from 'react'
import styled from 'styled-components'
import HeadForm from '../../components/register/HeadForm'
import ImgCard from '../../images/card.png'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {ic_credit_card} from 'react-icons-kit/md/ic_credit_card'


import { Formik } from 'formik';
import * as Yup from 'yup';




/**
* @author
* @class 
**/

const initialValues = {
   cardNumber: "",
   name: "",
   cardExpiry: "",
   cardCVC: ""
}

class Credit extends Component {
 state = {}
 render() {
  return(
      <CreditComponent>
          <HeadForm />
             <div className="form-container">
             {/*CREDIT CARD FORM STARTS HERE*/}
               <div className="panel">
                   <div className="panel-head">
                       <div className="row-display">
                           <h3 className="text">Payment Details</h3>
                           <div className="display-td">
                           <img src={ImgCard} alt="card" className="card"/>
                           </div>
                       </div>
                   </div>
                   <Formik
                     initialValues={initialValues}
                     onSubmit = {(values) => {
                           console.log(values)
                     }}
                     render = {({ values, handleSubmit, handleChange}) => {
                        return(
                                 <div className="panel-body">
                                    <form className="form" onSubmit={handleSubmit}>
                                          <div className="row">
                                             <div className="content">
                                                <div className="form-group">
                                                      <label className="number">CARD NUMBER</label>
                                                      <div className="input-group">
                                                      <input 
                                                      className="input-card"
                                                      id="cardNumber"
                                                      type="tel" 
                                                      name="cardNumber"
                                                      value={values.cardNumber}
                                                      onChange={handleChange}
                                                      placeholder="Valid Card Number" 
                                                      autoComplete="cc-number" 
                                                      required
                                                      aria-required="true" />
                                                      <span className="icon">
                                                      <Icon className="Icon" icon={ic_credit_card} />
                                                      </span>
                                                      </div>
                                                </div>
                                             </div>
                                          </div>

                                          <div className="row">
                                             <div className="content3">
                                                <div className="form-group">
                                                      <label className="name">
                                                         Name on Card
                                                      </label>
                                                      <input 
                                                      type="text" 
                                                      class="formname" 
                                                      name="name"
                                                      value={values.name}
                                                      onChange={handleChange}
                                                      placeholder="Name on card" />
                                                </div>
                                             </div>
                                          </div>

                                          <div className="row">
                                             <div className="content1">
                                                <div className="form-group">
                                                      <label className="exp">
                                                         <span className="visible">EXP</span>&nbsp;DATE
                                                         <input 
                                                            type="tel" 
                                                            className="input-exp" 
                                                            name="cardExpiry"
                                                            value={values.cardExpiry}
                                                            onChange={handleChange} 
                                                            placeholder="MM / YY" 
                                                            autoComplete="cc-exp" 
                                                            required 
                                                            aria-required="true" />
                                                      </label>
                                                </div>
                                             </div>
                                             <div className="content2">
                                                <div className="form-group">
                                                      <label className="cvc">
                                                         CVC
                                                      </label>
                                                      <input 
                                                      type="tel" 
                                                      className="input-cvc" 
                                                      name="cardCVC" 
                                                      value={values.cardCVC}
                                                      onChange={handleChange}
                                                      placeholder="Security Code" 
                                                      autoComplete="cc-csc" 
                                                      required
                                                      aria-required="true" />
                                                </div>
                                             </div>
                                          </div>

                                          <div className="row">
                                             <div className="plan">
                                                <div className="planinfo">
                                                      <span className="planname">
                                                         Premium Plan
                                                      </span>
                                                      <span className="plandesc">
                                                         USD14.95/mo.
                                                      </span>
                                                </div>
                                                <div className="planchange">
                                                      <Link to="#" className="change">
                                                      Change
                                                      </Link>
                                                   </div>
                                             </div>
                                          </div>
                                          <br />
                                          <div className="row">
                                             <div className="btn">
                                             <button className="membership" type="submit" >Start Membership</button>
                                             <br />
                                             </div>
                                          </div>  
                                    </form>
                                 </div>
                  )}}>
               </Formik>
               </div>
             </div>
      </CreditComponent>
    )
   }
 }


export default Credit;

const CreditComponent = styled.div`
 color: #000;

 .form-container {
     padding: 30px;
     
 }
 .panel {
    border-color: #ddd;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid silver;
    border-radius: 4px;
    display: table;
    text-align: left;
    max-width: 440px;
    margin: 0 auto;
    padding: 20px;

    
 }

 .panel-head{
    display: table;
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 500px;
 }

 .row-display{
    display: table-row;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: border-box;
 }

 .text {
    display: table-cell;
    vertical-align: middle;
    width: 50%;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
 }

 .display-td{
    display: table-cell;
    vertical-align: middle;
    width: 50%;
 }

 .card{
    min-width: 180px;
    float: right!important;
 }

 
 .panel-body{
    padding: 15px;
    box-sizing: border-box;
 }

 .form{
    display: block;
    margin-top: 0em;
 }

 .row{
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: border-box;
 }

 .content{
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
 }

 .form-group{
    margin-bottom: 15px;
 }

 .number{
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    cursor: default;
 }

 .input-group{
    position: relative;
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
}
 }

 .input-card{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: table-cell;
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;;
    margin-bottom: 0;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
 }

 .icon{
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
    display: table-cell;
 }

 .Icon{
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
 }

 .content1{
    width: 58.33333333%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
 }

 .exp{
    display: block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    box-sizing: border-box;
    cursor: default;
 }

 .input-exp{
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
 }

 .content2{
    float: right!important;
    width: 41.66666667%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
 }

 .cvc{
    display: block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    box-sizing: border-box;
    cursor: default;
 }

 .input-cvc{
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    margin: 0;
    font: inherit;
 }


 .content3{
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
 }

 .name{
    display: block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    box-sizing: border-box;
    cursor: default;
 }

 .formname{
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    font-family: inherit;
    margin: 0;
    font: inherit;
 }

 .plan{
    background-color: #f4f4f4;
    border-radius: 5px;
    padding: 14px;
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    text-align: left;
    margin: 0 ;
    width: 480px;
    
 }

 .planinfo{
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    dispay: flex;
    flex-direction: column;
 }

 .planname{
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    display: block;
    margin-bottom: 5px;
 }

 .plandesc{
    font-size: 16px;
    font-weight: normal;
    color: #737373;
    display: inline;
 }

 .planchange{
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
 }

 .change {
    font-size: 16px;
    margin-left: 20px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    color: #0071eb;
    text-align: right;
 }

 .btn{
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
 }

 .membership{
    background-color: var(--main-purple);
    border-color: purple;
    box-shadow: none;
    opacity: .65;
    display: block;
    width: 100%;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 6px;
    color: #fff;
    margin-bottom: 0;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    font-family: inherit;
    &:hover {
        background: var(--main-purple-hover);}
 }

`;