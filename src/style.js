import styled from "styled-components";

export const About = styled.div`

 display: flex;
 align-items: center;
 justify-content: space-between;
 color: #fff;
 padding: 8rem 0rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right:5rem;
  h2{
    font-weight: lighter;
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
`;

export const Hidden = styled.div`
  overflow: hidden;
`