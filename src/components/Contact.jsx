import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  return (
    <>
    <section
                id='contact'
                className='py-20 bg-black'>
                    <div className='container mx-auto px-6'>
                        <h2 className='text-3xl font-bold text-center mb-4'>
                        Contact
                    </h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/*Contact*/}
                        <div>
                            <form className='gap-y-6'>
                                <div>
                                    <label htmlFor="name" className='block text-gray-300 m-2'>Name</label>
                                    <input
                                    className='w-full  border border-gray-600 rounded-lg px-4 py-3 outline-none placeholder:text-gray-600' 
                                    type="text"
                                    placeholder='Enter Your Name'  />
                                </div>

                                <div>
                                    <label htmlFor="email" className='block text-gray-300 m-2'>Email</label>
                                    <input
                                    className='w-full  border border-gray-600 rounded-lg px-4 py-3 outline-none placeholder:text-gray-600' 
                                    type="text"
                                    placeholder='Enter Your Email' />
                                </div>

                                <div>
                                    <label htmlFor="message" className='block text-gray-300 m-2'>Message</label>
                                    <textarea
                                    className='w-full h-40  border border-gray-600 rounded-lg px-4 py-3 outline-none placeholder:text-gray-600' 
                                    type="text"
                                    placeholder='Write here...' />
                                </div>
                                <button
                                type='submit'
                                className='w-full px-6 py-3 mt-5 bg-amber-700 rounded-lg font-medium hover:bg-amber-600 transition duration-300 cursor-pointer'>
                                    Send
                                </button>

                                <div>
                                    
                                </div>
    
                            </form>
                        </div>

                        {/*Contact*/}
                        <div className="gap-y-8 mt-10 ms-20">

                            <div className='flex items-start '>
                                <div className='text-white text-xl mr-4 '>
                                    <FontAwesomeIcon icon={faLocation}/>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                    <p className='text-gray-400'>Edapal ,Malappuram</p>
                                </div>
                            </div>

                             <div className='flex items-start'>
                                <div className='text-white text-xl mr-4 '>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                    <p className='text-gray-400'>vasundharapalekkatt@gmail.com</p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='text-white text-xl mr-4 '>
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                    <p className='text-gray-400'>+91 7592890319</p>
                                </div>
                            </div>

                            <div className='pt-4 mt-5 '>
                                <h3 className='font-bold text-lg'>Follow Me</h3>
                                <div className='flex gap-x-4'>
                                    <a href="https://github.com/vasundharapalekkatt" className='w-12 h-12 rounded-ull flex items-center justify-center text-white hover:text-amber-600'>
                                        <FontAwesomeIcon icon={faGithub}/>
                                    </a>

                                    <a href="https://www.linkedin.com/in/vasundhara-g-5a3838365" className='w-12 h-12 rounded-ull  flex items-center justify-center text-white hover:text-amber-600'>
                                        <FontAwesomeIcon icon={faLinkedinIn}/>
                                    </a>

                                    <a href="#" className='w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-amber-600'>
                                       <FontAwesomeIcon icon={faInstagram}/>
                                    </a>

                                </div>

                            </div>

                        </div>

                        



                    </div>

                    </div>

                </section>

    </>
  )
}

export default Contact