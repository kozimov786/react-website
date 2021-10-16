import React from 'react';
import styled from 'styled-components';
import { About } from '../style';

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any questions <span>FAQ</span></h2>

      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
        </div>
      </div>

      <div className="question">
        <h4>Daily schudule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
        </div>
      </div>

      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
        </div>
      </div>

      <div className="question">
        <h4>What Product Do You Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, itaque.</p>
        </div>
      </div>

    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2{
    margin-bottom: 2rem;
    font-weight: lighter;
  }
  span{
    display: block;
  }
  .question{
    padding:3rem 0rem;
   cursor: pointer;

  }
  .answer{
    border-bottom: 2px solid #fff;
    padding: 2rem 0rem;
   p{
     padding: 1rem 0rem;
   }
  }

`

export default FaqSection;