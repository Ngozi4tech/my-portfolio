import React from 'react'
import ProjectItem from './Projectitem'
import aiImg from '../assets/ai.png'
import eventImg from '../assets/event.png'
import geniusbuyImg from '../assets/geniusbuy.png'
import geniussocialImg from '../assets/geniussocial.png'



const Project = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem atque quod fugiat, nemo id neque minus sed ad quas eveniet nihil laudantium hic tempora ut quisquam. Magnam tempore autem odio?</p>
    <div className='grid grid-cols-2 gap-12'>
        <ProjectItem img={aiImg} title = 'ai app'/>
        <ProjectItem img={eventImg} title = 'event app'/>
        <ProjectItem img={geniusbuyImg} title = 'geniusbuy app'/>
        <ProjectItem img={geniussocialImg} title = 'geniussocial app'/>

        
        
    </div>
    </div>
  )
}

export default Project