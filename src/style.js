import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`

 display: flex;
 align-items: center;
 justify-content: space-between;
 color: #fff;
 padding: 8rem 0rem;
 @media only screen and (max-width:1120px){
   flex-direction: column;
   text-align: center;
   button{
     margin-bottom: 40px;
   }
 }
`;

export const Description = styled.div`
  flex: 1;
  padding-right:5rem;
  h2{
    font-weight: lighter;
  }
  @media only screen and (max-width:1120px){
   padding-right: 0;
 }
`;

export const Image = styled.div`
 width: 560px;
 img{
   width: 560px;
   height: 600px;
   object-fit: cover;
   display: block;
 }
 @media only screen and (max-width:605px){
   width: 320px;
  img{
    width: 320px;
    height: auto;
  }
 }
`;

export const Hidden = styled.div`
  overflow: hidden;
`