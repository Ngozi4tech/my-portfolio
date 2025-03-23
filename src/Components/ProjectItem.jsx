import React from 'react'

const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover: bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt='/' className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[30%] left-[30%] translate-x-[-30] translate-y-[30%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}   
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>React Js</p>
            <a href='/'>
            <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem
