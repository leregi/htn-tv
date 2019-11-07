import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { Icon } from 'react-icons-kit'
import {ic_clear} from 'react-icons-kit/md/ic_clear'
import {ic_done} from 'react-icons-kit/md/ic_done'
import { generateMedia } from 'styled-media-query'

function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem '}}>Choose one plan and watch everything on HTN</span>
                    <Button className="btn">Get Started</Button>
                </div>
                <br /><br />
                {/* Tab Bottom Content */}
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Trial</th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>$2.00</td>
                                <td>$10.95</td>
                                <td>$9.95</td>
                                <td>$14.95</td>
                            </tr>
                            <tr>
                                <td>Credit Card on file</td>
                                <td><Icon icon={ic_clear} size={10} /></td>
                                <td><Icon icon={ic_clear} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                            </tr>
                            <tr>
                                <td>Unlimited content for</td>
                                <td>1 TV</td>
                                <td>1 TV</td>
                                <td>2 TV </td>
                                <td>2 TV</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone, tablet ...</td>
                                <td><Icon icon={ic_done} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                            </tr>
                            <tr>
                                <td>Tech Support</td>
                                <td><Icon icon={ic_done} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                            </tr>
                            <tr>
                                <td>Unlimited Live TV and Radio Programs</td>
                                <td><Icon icon={ic_clear} size={10} /></td>
                                <td><Icon icon={ic_clear} size={10} /></td>
                                <td><Icon icon={ic_clear} size={10} /></td>
                                <td><Icon icon={ic_done} size={10} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentThree;


// Media Tab
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1000px'
})

// Main Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
      margin: 0 15%;
      padding-bottom: 1%;
  }

  .tab-top-content {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      padding: 3rem 0 0;
      ${customMedia.lessThan('lgDesktop')`
       grid-template-columns: 1fr;
       row-gap: 1.5rem;
       text-align: center;
      `}
  }

  span {
      grid-column: 3 / 9;
      ${customMedia.lessThan('lgDesktop')`
       grid-column: 1 / -1;
      `}
  }

  .btn {
      grid-column: 9 / 12;
      margin-left: 3rem;
      margin-right: 5.1rem;
      ${customMedia.lessThan('mdDesktop')`
       grid-column: 1 / -1;
       margin-left: 30%;
       margin-right: 30%;
      `}
  }

  // Tab Bottom Content
   .tab-vbottom-content {
       margin: 2rem auto;
   }

   // Table
   table {
       width: 100%;
       margin-top: 2rem;
       border-collapse: collapse;
   }

   table thead th {
       text-transform: uppercase;
       padding: 0.8rem;
   }

   table tbody {
       display: table-row-group;
       vertical-align: middle;
       border-color: inherit;
   }

   table tbody tr td{
       color: #999;
       padding: 0.8rem 1.2rem;
       text-align: center;
   }

   table tbody tr td:first-child {
       text-align: left;
   }

   table tbody tr:nth-child(even) {
       background: #222;
   }
`;