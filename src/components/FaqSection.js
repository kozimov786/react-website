import React from 'react';
import styled from 'styled-components';
import { About } from '../style';
import Toggle from './toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { ScrollAnim } from "../Animation";
import { Scroll } from './useScroll';

const FaqSection = () => {
  const [element, controls] = Scroll();
  return (
    <Faq variants={ScrollAnim} ref={element} animate={controls} initial="hidden" >
      <h2>Any questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
          </div>
        </Toggle>

        <Toggle title="Daily schudule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
          </div>
        </Toggle>

        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
          </div>
        </Toggle>

        <Toggle title="What Product Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2{
    margin-bottom: 2rem;
    font-weight: lighter;
    @media only screen and (max-width:500px){
     font-size: 24px;
  }
  }
  span{
    display: block;
  }
  h4{
    margin: 3rem 0rem;
    cursor: pointer;
    @media only screen and (max-width:500px){
     font-size: 20px;
  }
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer{
    p{
      margin-top: 0;
    }
  }

`

export default FaqSection;