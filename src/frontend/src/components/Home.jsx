import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { MdKeyboardArrowDown } from "react-icons/md";


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white cursor-default'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold pb-5'>
                <span className='home-emoji'>🎵</span>
                <span> transform songs </span>
                <span className='home-emoji'>🎵</span>
            </h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#4171ff]'>
                into art
            </h2>
            <div className='pt-5'>
                {/* <button className='font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:border-[#4171ff] transition ease-in-out duration-500 rounded-md'>
                <Link to="projects" smooth={true} duration={500}>
                    Try it out!
                </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
                </button> */}
                <Link to="home" smooth={true} duration={500} className='flex flex-col justify-center items-center font-semibold cursor-pointer hover:scale-105 duration-300 text-gray-400 text-lg font-md'>
                    <p>
                        try it out!
                    </p>
                    <MdKeyboardArrowDown />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Home