import React from 'react'

const Internship = () => {

  const certificates = [
    {
      title: "ME(A)RN Stack Web Development",
      provider: "Luminar Technolab",
      year: "JUL 2025 - JAN 2026",
      details: [
        "Completed ME(A)RN Stack Web Developement Internship and developed responsive full-stack applications using React.js, Express.js, Node.js and MongoDB.",

      ],
    }
  ]

  return (
    <>
      <section
        className='py-20 bg-black'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-12'>Internship</h2>

        </div>

        <div className='max-w-5xl mx-auto space-y-10 hover:-translate-y-2 transition-all duration-300'>
          {certificates.map((certificates, index) => (
            <div key={index}
              className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300'>

              {/*title and year*/}
              <div className='flex justify-between items-center'>
                <h3 className='text-2xl font-semibold text-gray-800' >{certificates.title} </h3>
                <span className='font-medium text-gray-600'>{certificates.year} </span>
              </div>

              {/*Provider*/}
            
                {certificates.provider && (
                  <p className='text-gray-600 mt-1'>Issued By : {certificates.provider} </p>
                )}

                {/*Bullet points*/}
                {certificates.details.length > 0 && (
                  <ul className='list-disc ml-6 mt-4 space-y-2 text-gray-700'>
                    {certificates.details.map((point, i) => (
                      <li key={i}>{point} </li>
                    ))}
                  </ul>
                )}
              </div>
          ))}
            </div>
    </section>

    </>
  )
}

export default Internship