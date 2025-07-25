import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div initial={{opacity: 0, x:100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}}
    className='flex flex-col items-center justify-center  container mx-auto p-12 md:px-16 lg:px-25 w-full overflow-hidden' id="About">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items:start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-7 text-gray-600 '>
          <div className='grid grid-cols-2 gap-4 md:gap-7 w-full 2xl:pr-20'>
            <div>
              <p className='text-3xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
             <div>
              <p className='text-3xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
             <div>
              <p className='text-3xl font-medium text-gray-800'>20+</p>
              <p>Mn. sq. Ft. Delivered</p>
            </div>
             <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-7 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam, voluptas iste, provident eaque incidunt ducimus earum minima enim unde nam. Aperiam nam harum explicabo magni a vero.
          </p>
          <button className='bg-blue-600 text-white py-2 px-8 rounded'>Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
