import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeadForm from '../components/register/HeadForm'
import {Button} from '../components/Button'

const regexp = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    firstNameError: '',
    lastNameError: '',
    emailError:'',
    passwordError:''
}

class RegisterForm extends Component {
    state = initState;

    handleFirstNameChange = e => {
      this.setState({
          firstName: e.target.value
      })
  }

  handleLastNameChange = e => {
    this.setState({
        lastName: e.target.value
    })
}

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    // Validation
    validate = () => {
        let inputError = false;
        const errors = {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: ''
        }
        

        if(this.state.firstName.length < 5) {
          inputError = true;
          errors.firstNameError = "Minimum 5 entry"
        }

        if(this.state.lastName.length < 5) {
          inputError = true;
          errors.lastNameError = "Minimum 5 entry"
        }

        if(!this.state.email){
            inputError = true;
            errors.emailError = 'Please enter a valid email'
        }else if (!this.state.email.match(regexp)) {
            inputError = true;
            errors.emailError = (
                <span style={{color: 'red'}}>Your email address must be valid</span>
            )
        }

        if(this.state.password.length < 4) {
            inputError = true;
            errors.passwordError = "Your password must contain between 4 and 60 characters"
        }
        this.setState({
            ...errors
        })
        return inputError;
    }

    onSubmit = e => {
        e.preventDefault()

        const err = this.validate();
        if(!err) {
            this.setState(initState);
        }
    }

    render() {
        return(
        <FormContainer>
            <HeadForm />
            <div className="wrapper">
              <div className="form-wrapper">
                <h1>Sign Up</h1>
                <form>
                    <div className="firstName">
                      <label>First Name</label>
                        <input 
                          className={this.state.firstNameError ? "error" : null}
                          type="text" 
                          onChange={this.handleFirstNameChange} 
                          required 
                          value={this.state.firstName}/>
                          
                        <span style={{color: '#4B0082'}}>{this.state.firstNameError}</span>
                    </div>

                    <div className="lastName">
                      <label>Last Name</label>
                        <input 
                          className={this.state.lastNameError ? "error" : null}
                          type="text" 
                          onChange={this.handleLastNameChange} 
                          required 
                          value={this.state.lastName}/>
                          
                        <span style={{color: '#4B0082'}}>{this.state.lastNameError}</span>
                    </div>

                    <div className="email">
                      <label>Email or Phone Number</label>
                        <input 
                          className={this.state.emailError ? "error" : null}
                          type="email" 
                          onChange={this.handleEmailChange} 
                          required 
                          value={this.state.email}/>
                        <span style={{color: '#4B0082'}}>{this.state.emailError}</span>
                    </div>
                <div className="password">
                  <label>Password</label>
                    <input 
                      className={this.state.passwordError ? "error" : null} 
                      type="password" 
                      onChange={this.handlePasswordChange} 
                      required
                      value={this.state.password} />
                      <span style={{color: '#4B0082'}}>{this.state.passwordError}</span>
                </div>
               <div className="createAccount">
                   <Button type="submit" onClick={e => this.onSubmit(e)}><Link to="/membership">Create an Account</Link></Button>
                   <br />
                   <small>Already Have an Account? &nbsp; <Link to="/login" style={{color: 'purple'}}><b><i>Login</i></b></Link></small>
               </div>
              
             
           </form>
           </div>
       </div>
   </FormContainer>
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