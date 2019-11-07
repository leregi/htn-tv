import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabTv from './tabs_nav/TabTv';
import TabBox from './tabs_nav/TabBox';
import TabPrices from './tabs_nav/TabPrices';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

import '../css/TabsNav.css';

/**
* @author
* @class 
**/

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }
render() {
  return(
   <div>
       <Tabs className="tabs" 
         selectedIndex={this.state.tabIndex} 
         onSelect={tabIndex => this.setState({ tabIndex })}
         style={{backgroundColor: 'var(--main-dark)'}}
        >
           <TabList className="tab-nav-container">
               <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                   <TabTv />
                   <p className="lgScreen" style={{marginBottom: '1.875rem'}}>Watch everywhere</p>
                   <br />
                   <span className="mdScreen" style={{ marginTop: '0.4rem'}}>Devices</span>
                </Tab>
               <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                   <TabBox />
                   <p className="lgScreen" style={{marginTop: '-5.3125rem'}}>Unsubscribe anytime</p>
                   <span className="mdScreen" style={{ marginTop: '-5.3125rem'}}>Cancel</span>
                </Tab>
               <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                   <TabPrices />
                   <p className="lgScreen">Pick our Plan</p>
                   <br />
                   <span className="mdScreen">Prices</span>
                </Tab>
           </TabList>

           {/* Tabs Content */}
           <TabPanel>
               <TabContentOne />
           </TabPanel>
           <TabPanel>
               <TabContentTwo />
           </TabPanel>
           <TabPanel>
               <TabContentThree />
           </TabPanel>
       </Tabs>
   </div>
    )
   }
 }

export default TabComponent;

