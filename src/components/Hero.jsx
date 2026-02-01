import { ReactTyped } from 'react-typed'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import vasundhara2022 from "../assets/vasuphoto2k25.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Hero = () => {
    return (
        <>
            <section

                id='home'
                className='h-screen flex flex-col md:flex-row items-center justify-center gap-10 pt-24 px-8 bg-black text-white ' >


                {/*left side content*/}
                <div className=' text-center md:text-left max-w-xl animate-fadeIn'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-amber-600'>Vasundhara</span>
                    </h1>

                    {/*Typing Animation*/}
                    <h2 className='text-xl md:text-3xl font-semibold text-gray-300 mb-4'>
                        <ReactTyped
                            strings={[
                                "Front-End Developer",
                                "Back-End Developer",
                                "React JS Developer",
                                "Angular Developer",
                                "MEARN Stack Developer",
                            ]}
                            typeSpeed={50}
                            backSpeed={40}
                            loop />
                    </h2>


                    <p className=' text-gray-300 mb-6'>I build stunning web experiences using modern technologies and innovative design, focusing on clean design and smooth user interactions.</p>

                        {/*Buttons*/}
                    <div className='flex gap-6 justify-center md:justify-start mb-6'>
                        <a href="#project" className=' px-6 py-3 border border-amber-950 rounded-lg font-semibold hover:bg-amber-900 hover:text-white transition duration-300'>View Projects</a>
                        <a className='px-6 py-3 border border-amber-950 rounded-lg font-semibold hover:bg-amber-900 hover:text-white transition duration-300' href="/Vasundhara_G_Resume.pdf" target='_blank' download >Download Resume</a>
                    </div>

                    {/*Social Media*/}
                    <div className='flex gap-6 text-3xl justify-center md:justify-start mt-4'>
                        <a href="https://github.com/vasundharapalekkatt" className="hover:text-amber-700 transition duration-300">
                        <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a href="https://www.linkedin.com/in/vasundhara-g-5a3838365" className="hover:text-amber-700 transition duration-300">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>

                        <a href="mailto:vasundharapalekkatt@gmail.com" className="hover:text-amber-700 transition duration-300">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </a>

                    </div>
                </div>

                {/*Right side content*/}

                <div className='relative'>
                    <img src={vasundhara2022} alt="profile" className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl object-cover 
                     animate-floating" />

                </div>
        </section >
        </>
    )
}

export default Hero