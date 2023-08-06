import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { certificate } from "../constants"
import { github } from "../assets"
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ProjectCard = ({
  index,
  name,
  link,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <a href={link} target='_blank'>
            <h3 className='text-white text-center font-bold text-[20px]'>{name}</h3>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <> 
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]">
        Hi' My name is Peeraphong, my nick name is Aon, I'm 23 years old, I graduate from Rajamangala university of technology lanna Chiang Mai, My major was computer engineering, I live in Chiang Mai, Thailand, I am constantly improving myself and never stop learning new things. I have excellent adaptation and high flexibility in different environments, Thanks.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certificate.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, 'about')