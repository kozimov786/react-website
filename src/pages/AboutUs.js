import React from 'react';
import AboutSection from "../components/AboutSection";
import ServisesSection from '../components/ServisesSection';
import FaqSection from "../components/FaqSection";
import { motion } from 'framer-motion';
import { pageAnime } from "../Animation";
import ScrollTop from "../components/ScrollTop";



const AboutUs = () => {
  return (
    <motion.div exit='exit' variants={pageAnime} initial='hidden' animate='show'>
      <AboutSection />
      <ServisesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutUs;