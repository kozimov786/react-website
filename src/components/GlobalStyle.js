import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: #1b1b1b;
  color: #fff;
  font-family: "Inter","Aril",sans-serif;
}
button{
  font-size: 1.1rem;
  cursor: pointer;
  border: 3px solid #23d997;
  padding: 1rem 2rem;
 font-weight: bold;
 background: transparent;
 color: #fff;
 transition:all 0.5s ease;
 &:hover{
   background-color: #23d997;
   color: #fff;
 }
}
h2{
  font-weight: lighter;
  font-size: 4rem;
}
h4{
  font-size: 2rem;
  font-weight: bold;
}
span{
  color: #23d997;
  font-weight: bold;
}
a{
  font-size: 1.1rem;
}
p{
  color: #ccc;
  margin: 3rem 0rem;
  font-size: 1.4rem;
  line-height: 1.5;
}
.container{
  max-width: 1450px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 25px;
  padding-left: 25px;
}
`
export default GlobalStyle;