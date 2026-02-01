import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { navLinks } from '../daata';

const Nav = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-black fixed w-full top-0 z-50 py-4 px-6 shadow-lg'>
            <div className='mx-auto text-white mx-w-6xl flex justify-between items-center'>

                {/*Logo*/}
                <h1 className='text-2xl font-bold text-white'>
                    Vasundhara G
                </h1>


                {/*Desktop Navbar */}
                <ul className='hidden md:flex gap-8'>
                    {
                        navLinks.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} 
                                className='hover:text-amber-800 duration-300 text-lg font-medium text-white'> {item.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                {/*Mobile Hamburger */}
                <button className='md:hidden text-3xl'
                    onClick={() => setOpen(!open)}>
                    {open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}


                </button>
            </div>

            {/*Mobile Menu*/}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col gap-6 py-6 text-center text-lg font-medium transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>

            {navLinks.map((item)=>(
                <a
                key={item.id}
                href={item.link}
                onClick={()=>setOpen(false)}
                className='hover:text-blue-500 duration-300'>
                    {item.title}
                </a>
            ))}

            </div>

        </nav>
    )
}

export default Nav