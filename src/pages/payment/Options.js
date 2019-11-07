import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {Button} from '../../components/Button'

/**
* @author
* @class
**/

class Options extends Component {
 render() {
  return(
      <OptionsComponent>
          <div className="content">
          <Button className="go">
              <NavLink to="/credit">Continue </NavLink>
            </Button>
              
          </div>
      </OptionsComponent>
    )
   }
 }


export default Options;

// Options Component
const OptionsComponent = styled.div`
 .go{
     margin-top: 30px;
     font-size: 1rem;
     border-radius: 0.1875rem;
     width: 100%
  }

  

`;