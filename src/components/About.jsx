import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div>
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
          options={{
            max: 45,      // Max tilt angle
            scale: 1,     // No scaling
            speed: 450,   // Speed of the effect
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[28px] flex justify-evenly items-center flex-col'
          >
            {/* object-contain makes the element fit within its container without stretching or cropping the content. typically an image or video)  */}
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}

const About = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}
    style={{"marginTop": "50px"}}>
      <p className={`${styles.sectionSubText}`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","","0.1",1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      Dedicated and results-driven Full Stack Developer with hands-on experience. 
      Proficient in both Back-end and Front-end technologies, with a strong commitment to delivering high-quality code.
      I am passionate about learning new technologies and frameworks, and I am always eager to take on new challenges and opportunities. 
      My goal is to become a proficient and versatile Full Stack Developer who can contribute to the success and growth of the company and the industry.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")