import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white z-50">
       
        <Link to="home" smooth={true} duration={500}>
            <h1 className='font-bold text-xl cursor-pointer pl-3'>melodybrush</h1>
        </Link>

        {/* menu */}
        <ul className='hidden md:flex font-semibold'>
            <li>
                <Link to="home" smooth={true} duration={500} className='hover:underline cursor-pointer'>
                    Home
                </Link>
            </li>
            {/* <li>
                <Link to="about" smooth={true} duration={500} className='hover:underline cursor-pointer'>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500} className='hover:underline cursor-pointer'>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500} className='hover:underline cursor-pointer'>
                    Projects
                </Link>
            </li>
            <li>
                <Link to="experience" smooth={true} duration={500} className='hover:underline cursor-pointer'>
                    Experience
                </Link>
            </li> */}
            <li>
                <Link to="Form" smooth={true} duration={500} className='hover:underline cursor-pointer'>
                    Transform
                </Link>
            </li>
        </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500} className='cursor-pointer'>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500} className='cursor-pointer'>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} className='cursor-pointer'>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500} className='cursor-pointer'>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="experience" smooth={true} duration={500} className='cursor-pointer'>
                    Experience
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} className='cursor-pointer'>
                    Contact
                </Link>
            </li>
        </ul>

        {/* social icons */}
        {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/jaydenpiao/' target='_blank' rel='noopener noreferrer'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/jaydenpiao' target='_blank' rel='noopener noreferrer'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='mailto:jaydenpiao@gmail.com' target='_blank' rel='noopener noreferrer'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://drive.google.com/file/d/1DZ5ENnf9C_oZidiCvQzff-c8bc4Znt-Z/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            
            </ul>

        </div> */}
        
    </div>
  )
}

export default Navbar