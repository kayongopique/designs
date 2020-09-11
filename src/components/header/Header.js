/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react';
import { NavLink as Link } from "react-router-dom";

import Background from '../assets/intro-bg.png';
import "./header.css";
import * as mq from '../../styles/media-queries';

const Nav = (props) => {
   return ( 
      <nav class="navbar navbar-expand-md">
         <Link exact to="/" activeStyle={{ color: '#fff'}} 
         className="nav-brand" css={{
            fontFamily: 'RobotoCondensed',
            fontSize: '38px',
            fontWeight: 300,
            padding: '0 44% 0 9%',
            [mq.small]:{
               fontFamily: 'RobotoCondensed',
               fontSize: '25px',
               padding: '0 8% 0 5%',
            },
            [mq.medium]: {
               padding: '0 30% 0 9%',
            }
         }}>
            &nbsp;<span css={{
               fontWeight: 'bold',
            }}>ALDEN</span> <span css={{
               fontFamily: 'Roboto-Light',
            }}>CASAS</span>
         </Link>
        
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            <i className="fa fa-bars" 
            style={{color:'#fff', fontSize: '28px'}}></i> 
         </button>

         <div class="collapse navbar-collapse" id="collapsibleNavbar">
         <ul class="navbar-nav">
                  <li className="nav-item">
               <Link to="/properties"  activeStyle={{color: '#fff'}} 
               className="nav-link" css={{
                  paddingRight: '20px',
               }}>
                  &nbsp;BUY OR SELL</Link>
            </li>
         
            <li className="nav-item">
               <Link to="/editor"  activeStyle={{color: '#fff'}} 
               className="nav-link"
               >&nbsp;CONTACT ME</Link>
            </li>
         </ul>
         </div>
       </nav> 
   );
 }
  
 export  {Nav};

const Header = () => {
    return ( 
        <section css={{
            width: "100%",
            height: 700,
            [mq.small]: {
               height: 600,
            },
            [mq.medium]: {
               height: 720,
            },
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
           <div css={{
              paddingTop: 51,
              [mq.small]: {
               paddingTop: 27,
              }
           }}>
              <Nav/>
               <div css={{
                     marginTop: '160px',
                     [mq.small]: {
                        marginTop: '120px',
                     }
                  }} className="slogan">
                     <p css={{
                         color: '#ffffff',
                         fontSize: '24px',
                         fontWeight: 400,
                        [mq.small]: {
                           fontSize: '18px',
                        },
                        fontFamily: 'RobotoCondensed',
                     }}>GREATER LAS VEGAS REAL ESTATE</p>
                  </div>
                  <div className="finddreamhome">
                     <div className="">
                        <p css={{
                           fontSize: '60px',
                           [mq.small]: {
                              fontSize: '30px'
                           },
                           fontFamily: 'Raleway-Light',
                        }} className="findur">FIND YOUR</p>
                     </div>
                        <div style={
                           {marginTop: "-20px",}
                        }>
                        <p css={{
                          fontSize: '60px',
                          [mq.small]: {
                             fontSize: '30px'
                          },
                          fontFamily: 'Raleway-Bold',
                        }} className="dreamhome">DREAM HOME</p>
                        
                     </div>
                  </div>
                  <div className="finddreamhome">
                     <button
                     onClick={""}
                     css={{
                        fontFamily:'Raleway-Medium',
                        fontSize: 21,
                        width: 249,
                        height: 60,
                        border: '2px solid #ffffff',
                        padding: "10px 20px",
                        [mq.small]: {
                           marginTop: '20px',
                        },
                        backgroundColor: 'transparent',
                        color: 'white',
                        fontSize: '21px',
                     }}>
                        CONTACT ME
                     </button>
                  </div>
               </div>
        </section>
     );
}
export default Header;

