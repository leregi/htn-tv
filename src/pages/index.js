import React, { Component } from 'react'
import Header from '../components/Header'
import TabComponent from '../components/TabComponent';
import Footer from '../components/Footer';

/**
* @author
* @class 

**/

class Main extends Component {
 render() {
  return(
   <div>
       <Header />
       <TabComponent />
       <Footer />
   </div>
    )
   }
 }

 export default Main;