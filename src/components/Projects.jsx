import React, { useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { useEffect } from 'react';
import { motion } from 'motion/react';

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(()=>{
   const updateCardsToShow = () =>{
    if(window.innerWidth >= 1024){
        setCardsToShow(projectsData.length);  //this is for large screen or desktop screen
    } else{
        setCardsToShow(1)     //for mobile screen or tablet screen it show only 1 project
    };}
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return ()=> window.removeEventListener("resize", updateCardsToShow);  
  },[])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)   //whenever it reach index=6 and projectdata.length = 6 it return 0 then it automatically come from project 1
  }
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length-1 : prevIndex -1))  //if prevIndex = 0 it goes to last length of projectData.length  if not , then  decreased by 1 
  }
  return (
    <motion.div initial={{opacity: 0, x:-200}} transition={{duration:1.5}} whileInView={{opacity:1, x:0}} viewport={{once: true}}
    className='container mx-auto py-4 pt-20 px-6 md:px-16 lg:px-28 w-full overflow-hidden' id="Projects">
      <h1 className='text-2xl sm:text-3xl font-bold text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80  mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

      {/* slider butttons */}

      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'><img src={assets.left_arrow} alt="Previous" /></button>
         <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'><img src={assets.right_arrow} alt="Next" /></button>
      </div>

      {/* project slider container */}
      <div className='overflow-hidden'>
        {/*  `translateX(-${(currentIndex * 100) / cardsToShow}%)` means - show left e.g it moves by 25% from left if currentIndex = 1*100 / 4 = 25 */}
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}} >  
            {projectsData.map((project, index) => (
             <div className="relative flex-shrink-0 w-full sm:w-1/4" key={index}><img src={project.image} alt="project.title" className='w-full h-auto mb-14' />
             <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                <div className='inline-block bg-white w-3/4 px-1 py-1 shadow-md'>
                 <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                  <p className='text-gray-500 text-sm'>{project.price} <span>{project.location}</span></p>
                </div>
             </div>
             </div>
            ) )}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
