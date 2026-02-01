import vasundhara2025 from "../assets/vasuphoto2k25.jpg";


const About = () => {
    return (
        <>
            <section

                id='about'
                className='px-6 md:px-20 py-20 bg-black h-screen'>
                <h2 className='text-4xl font-bold text-center text-gray-100 mb-16'>About Me</h2>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 '>


                    {/*Left image*/}
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <div className='relative w-72 md:w-96 aspect-square p-2'>
                            {/*image*/}
                            <img src={vasundhara2025} alt="Profile2" className='w-full h-full object-fit rounded-lg  relative z-10' />
                        </div>
                    </div>

                    {/*content*/}
                    <div className='md:w-1/2 w-full'>

                        <p className='text-lg text-gray-200 leading-relaxed mb-4'>Hi, I'm <span>Vasundhara G</span>,a passionate <strong>ME(A)RN Stack Developer</strong> fresher who loves
                            building clean, responsive, and user-friendly web applications.</p>
                        <p className='text-lg text-gray-200 leading-relaxed mb-4'>I work with MongoDB, Express.js, React.js and Node.js to create
                            full-stack applications, always focusing on writing efficient and
                            modern code.</p>
                        <p className='text-lg text-gray-200 leading-relaxed mb-4'>I am actively looking for opportunities to learn, grow, and
                            contribute to real-world projects.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default About