import React from 'react'
import Workitem from './Workitem';


const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem',
    },
    {
        year: 2018,
        title: 'Amazon',
        duration: '2 Years',
        details: 'Lorem',
    },
    {
        year: 2015,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem',
    },
    {
        year: 2012,
        title: 'heavn',
        duration: '3 Years',
        details: 'Lorem',
    },
]
const Work = () => { 
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, id) => (
        <Workitem
        key={id}
        year={item.year}
        tittle={item.title}
        duration={item.duration}
        details={item.details}
        />
    ) ) }
    </div>
  );
};

export default Work