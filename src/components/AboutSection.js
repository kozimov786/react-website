import React from 'react';
import home1 from "../Images/home1.png";
import { About, Hidden, Description, Image } from '../style';

const AboutSection = () => {
  return (
    <About>

      <Description>

        <div>

          <Hidden>
            <h2>We work to make</h2>
          </Hidden>

          <Hidden>
            <h2>your <span>dream</span></h2>
          </Hidden>

          <Hidden>
            <h2>come true</h2>
          </Hidden>

        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi iusto velit quas alias, sed error! Ut similique asperiores perspiciatis.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  )
}



export default AboutSection;
