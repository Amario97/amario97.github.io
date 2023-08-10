import React from 'react';
import HTML from '../assets/Mario.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-8'>
             
            <img className=' mx-auto rounded-lg hover:scale-110 duration-500 ' src={HTML} alt="HTML icon" />
              
            <div className='flex flex-col justify-center items-center w-full h-full'>
              <p className='text-lg'> 
        Hello, i'm a Software developer based in Seattle,WA. 
        I'm self-driven and motivated , I adept at testing software products, developing and building web
        applications from mockup to rollout. Strengths in the ability to solve problems, identifying the problem, and
        finding the solution. Adept at working independently as well as collaborating with teams.
            </p>  
            
            </div>
            
          </div>
          
          
          
          </div>

      </div>
    
  );
};

export default About;
