import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <NavBar>
      <div className="container nav__container">
        <Link className="logo" to='/'>
          Kozimov_Dev
        </Link>
        <ul>
          <li>
            <Link to='/'>About Us</Link>
            <Line transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/' ? '50%' : '0%' }}
            />
          </li>
          <li>
            <Link to='/work'>Our Work</Link>
            <Line transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/work' ? '50%' : '0%' }}
            />
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
            <Line transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
            />
          </li>
        </ul>
      </div>
    </NavBar>
  )
}

const NavBar = styled.nav`
 padding: 2rem 0rem;
 background-color: #282828;
 position: sticky;
 top: 0;
 z-index: 99;
 .nav__container{
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media only screen and (max-width:590px){
     flex-direction: column;
   }
 }
 .logo{
   font-size: 1.5rem;
   font-family: "Lobster",cursive;
   font-weight: lighter ;
   @media only screen and (max-width:590px){
     margin-bottom:20px;
   }
 }
 a{
   color: #fff;
   text-decoration: none;
 }
 ul{
   padding: 0;
   margin: 0;
   list-style-type:none;
   display: flex;
   align-items: center;

   li{
     margin-left: 160px;
     white-space: nowrap;
     position: relative;
     @media only screen and (max-width:920px){
     margin-left: 50px;
     }
     @media only screen and (max-width:420px){
     margin-left: 15px;
     }
   }
 }
`
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 0;
`;

export default Nav;