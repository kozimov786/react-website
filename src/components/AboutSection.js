import React from 'react';
import home1 from "../Images/home1.png";
import { About, Hidden, Description, Image } from '../style';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../Animation';
import Wave from './Wave';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <About>

      <Description>

        <div>
          <Hidden>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hidden>

          <Hidden>
            <motion.h2 variants={titleAnim}>your <span>dream</span></motion.h2>
          </Hidden>

          <Hidden>
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </Hidden>
        </div>

        <motion.p variants={fade}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi iusto velit quas alias, sed error! Ut similique asperiores perspiciatis.
        </motion.p>

        <Link to='/contact'><motion.button variants={fade}>Contact Us</motion.button></Link>

      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  )
}
export default AboutSection;
