import React, { useState } from 'react'
import bookstore from "../assets/boostore.jpg"
import eecart from "../assets/eecart.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faCss3, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faLeaf, faXmark } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Book Store Website",
      description: "A full-stack application with user authentication, book management, RESTful APIs and seamless frontend–backend integration.",
      fullDescription:
        "Developed a full-stack web application using MongoDB, Express.js, React.js, and Node.js to manage users and books efficiently. Designed and implemented RESTful APIs for secure user authentication and complete book management functionality. Applied CRUD operations and Integrated the frontend with backend services to enable seamless data flow and a smooth user experience.",
      image: bookstore,
      tech: [faReact, faJs, faDatabase, faNode],
      live: "https://bookstore-flame-phi.vercel.app"
    },
    {
      title: "E-Cart Website",
      description: "A responsive e-commerce application using React.js and Redux. Created a mobile-friendly UI with Tailwind CSS and smooth, real-time updates.",
      fullDescription:
        "An e-commerce platform built using React, HTML, CSS and JavaScript with product filtering. Implemented Redux for efficient global state management of products and cart data. Designed a mobile-friendly user interface with Tailwind CSS, ensuring a clean and consistent layout across devices. Improved overall user experience through smooth state handling and real-time updates.",
      image: eecart,
      tech: [faHtml5, faCss3, faJs, faReact],
      live: "https://react-redux-ecart-website.netlify.app"
    }
  ]

  return (
    <section
      id="project"
      className="py-16 px-6 md:px-12 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-black">
                {project.title}
              </h3>

              <p className="text-black">
                {project.description}
              </p>

              {/*icons*/}
              <div className="flex gap-3 text-xl">
                {project.tech.map((icon, i) => (
                  <span
                    key={i}
                    className="p-2 bg-gray-100 rounded-lg border border-gray-200 text-black
                               hover:outline hover:outline-blue-400 hover:shadow-lg"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </span>
                ))}
              </div>

              {/* View Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 bg-blue-950 text-white rounded-lg
                           hover:bg-blue-900 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm
                        flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full relative">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              <FontAwesomeIcon icon={faXmark} className='text-white  bg-black hover:bg-blue-950'/>
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            <h2 className="text-3xl font-bold mb-2 text-black">
              {selectedProject.title}
            </h2>

            <p className="text-gray-700 mb-4">
              {selectedProject.fullDescription}
            </p>

            <div className="flex gap-3 text-2xl mb-6">
              {selectedProject.tech.map((icon, i) => (
                <span
                  key={i}
                  className="p-2 bg-gray-100 rounded-lg border border-gray-300 text-black"
                >
                  <FontAwesomeIcon icon={icon} />
                </span>
              ))}
            </div>

            <a
              href={selectedProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-950 text-white rounded-lg
                         hover:bg-blue-900 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
