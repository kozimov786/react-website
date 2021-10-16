import React from 'react';
import clock from "../Images/clock.svg";
import diaphragm from "../Images/diaphragm.svg";
import money from "../Images/money.svg";
import teamwork from "../Images/teamwork.svg";
import home2 from "../Images/home2.png";
import styled from 'styled-components';
import { About, Image } from '../style';
import { ScrollAnim } from "../Animation";
import { Scroll } from './useScroll';

const ServisesSection = () => {
  const [element, controls] = Scroll();
  return (
    <Services className='services' ref={element} variants={ScrollAnim} animate={controls} initial='hidden'>
      <div className="services__info">
        <h2>High <span>quality</span>services</h2>
        <Cards>
          <Card>
            <div className="icon__wrapper">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon__wrapper">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon__wrapper">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon__wrapper">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </div>

      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  )
}

const Services = styled(About)`
  h2{
    margin-bottom: 5rem;
    @media only screen and (max-width:500px){
     font-size: 22px;
  }
  }
  p{
    width: 70%;
    margin: 0;
  }
  @media only screen and (max-width:500px){
     width:350px;
     margin-right: 0;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width:1500px){
   justify-content: center;
  }
`;
const Card = styled.div`
  margin-bottom: 4rem;
  .icon__wrapper{
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
   img{
     margin-right: 16px;
   }
   h3{
      padding: 1rem;
      background-color: #fff;
      color: #000;
    }
  }
`
export default ServisesSection;