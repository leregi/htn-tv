import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeadForm from '../components/register/HeadForm'
import {Button} from '../components/Button'
import { Formik } from "formik";
import * as Yup from 'yup';
const initialsValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}
const registratinSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4)
    .required("You  must Enter firstname"),
    lastName: Yup.string()
      .min(4)
      .required("You must enter lastname"),
      email: Yup.email()
        .required("enter a valid Email"),
      password: Yup.string()
          .min(4)
          .required("Password must have 4 characters")
})
class RegisterForm extends Component {

    render() {
        return(
          <>
            <FormContainer>
                  <HeadForm />
                  <div className="wrapper">
                    <div className="form-wrapper">
                      <h1>Sign Up</h1>
                          <Formik
                            initialValues={initialsValues}
                            validationSchema={registratinSchema}
                            onSubmit={(values) => {
                              console.log(values)
                            }}
                            render = {({ errors, touched, values, handleSubmit, handleChange }) => {
                                  return (
                                            <form onSubmit={handleSubmit}>
                                                <div className="firstName">
                                                  <label>First Name</label>
                                                    <input 
                                                      type="text"
                                                      id="firstName"
                                                      name="firstName"
                                                      value={values.firstName}
                                                      onChange={handleChange} 
                                                      required
                                                      />
                                                      
                                                    <span style={{color: '#4B0082'}}>error1</span>
                                                </div>

                                                <div className="lastName">
                                                  <label>Last Name</label>
                                                    <input 
                                                      type="text"
                                                      id="lastName"
                                                      name="lastName"
                                                      value={values.lastName} 
                                                      onChange={handleChange} 
                                                      required
                                                      />
                                                      
                                                    <span style={{color: '#4B0082'}}>error2</span>
                                                </div>

                                                <div className="email">
                                                  <label>Email or Phone Number</label>
                                                    <input
                                                      type="email"
                                                      id="email"
                                                      name="email"
                                                      value={values.email} 
                                                      onChange={handleChange} 
                                                      required
                                                      
                                                      />
                                                    <span style={{color: '#4B0082'}}>error email</span>
                                                </div>
                                            <div className="password">
                                              <label>Password</label>
                                                <input
                                                  id="password"
                                                  type="password"
                                                  name="password"
                                                  value={values.password} 
                                                  onChange={handleChange} 
                                                  required 
                                                  />
                                                  <span style={{color: '#4B0082'}}>error password</span>
                                            </div>
                                          <div className="createAccount">
                                              <Button type="submit">Create an Account</Button>
                                              <br />
                                              <small>Already Have an Account? &nbsp; <Link to="/login" style={{color: 'purple'}}><b><i>Login</i></b></Link></small>
                                          </div>
                                          
                                        
                                      </form>
                              )}}>
                          </Formik>
                </div>
            </div>
        </FormContainer>
      </>
    )
   }
 }


export default RegisterForm;

const FormContainer = styled.div`

.wrapper {
    margin-top: -30px;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
  
  .form-wrapper {
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 10px 50px #555;
    background-color: #D8BFD8;
  }
  
  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  
  h1 {
    text-align: center;
    width: 100%;
    color: #000;
    font-weight: lighter;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
  label {
    font-size: 0.8em;
    margin-bottom: 0.25em;
    color: #222;
    font-weight: lighter;
  }
  
  input {
    padding: 10px 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cfcfcf;
  }

  
  input::placeholder {
    font-size: 1.2em;
    font-weight: lighter;
    color: #999;
  }
  
  input.error {
    border: 1px solid red;
  }
  
  .errorMessage {
    color: red;
    font-size: 0.75em;
    display: relative;
  }
  
  .firstName {
    margin-right: 1%;
  }
  
  .lastName {
    margin-left: 1%;
  }
  
  .firstName,
  .lastName,
  .email,
  .password {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .firstName,
  .lastName {
    width: 49%;
  }
  
  .email,
  .password {
    width: 100%;
  }
  
  .createAccount {
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .createAccount button {
    background-color: var(--main-purple);
   
    width: 100%;
    margin-top: 1em;
    padding: 8px 0px;
    font-size: 1em;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
  }
  
  .createAccount button:hover {
    background-color: var(--main-purple-hover);
    border: 2px solid purple;
  }
  
  .createAccount small {
    color: #000;
    font-weight: lighter;
    font-size: 16px;
  }
`
;