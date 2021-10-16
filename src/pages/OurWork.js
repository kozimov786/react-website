import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from "../Images/athlete-small.png";
import theracer from "../Images/theracer-small.png";
import goodtimes from "../Images/goodtimes-small.png";
import { motion } from 'framer-motion';
import { pageAnime, photoAnim, sectionAnim, fade, lineAnim } from "../Animation";
import { Scroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";





const OurWork = () => {
  const [element, controls] = Scroll()
  const [element2, controls2] = Scroll()

  return (
    <Work exit='exit' variants={pageAnime} initial='hidden' animate='show'>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to='/work/the-athlete'>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Hide>
        <Movie variants={sectionAnim} ref={element} animate={controls} initial="hidden">
          <h2>The Racer</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to='/work/the-racer'>
            <img src={theracer} alt="theracer" />
          </Link>
        </Movie>
      </Hide>
      <Hide>
        <Movie variants={sectionAnim} ref={element2} animate={controls2} initial="hidden">
          <h2>Good Times</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to='/work/good-times'>
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </Movie>
      </Hide>
      <ScrollTop />
    </Work>
  )
}
const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 0rem;
h2{
  margin-bottom:1rem;
}

`
const Movie = styled(motion.div)`
   padding-bottom:10rem;
   .line{
     height: 0.5rem;
    background-color: #27d997;
    margin-bottom: 3rem;
   }
   img{
     width: 100%;
     height: 70vh;
     object-fit: cover;
     object-position:center center;
   }
`;
const Hide = styled.div`
  overflow: hidden;
`
export default OurWork;