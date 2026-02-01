import { faAngular, faBootstrap, faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faLeaf } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <>
            <section
                id='skills'
                className='px-6 md:px-20 py-20 bg-gray-800 '>
                    <h2 className='text-4xl font-bold text-gray-100 mb-4'>Skills</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-amber-300'>
                        <SkillCard title="Front-End">
                            <SkillItem icon={<FontAwesomeIcon icon={faHtml5} />} label="HTML" />
                            <SkillItem icon={<FontAwesomeIcon icon={faCss3} />} label="CSS" />
                            <SkillItem icon={<FontAwesomeIcon icon={faJs} />} label="JavaScript" />
                            <SkillItem icon={<FontAwesomeIcon icon={faBootstrap} />} label="Bootstrap" />
                            <SkillItem icon={<FontAwesomeIcon icon={faArrowRight} />} label="Tailwind CSS" />
                            <SkillItem icon={<FontAwesomeIcon icon={faReact} />} label="React js" />
                            <SkillItem icon={<FontAwesomeIcon icon={faCheck} />} label="Redux" />
                            <SkillItem icon={<FontAwesomeIcon icon={faAngular} />} label="Angular" />

                        </SkillCard>

                        <SkillCard title="Back-End">
                            <SkillItem icon={<FontAwesomeIcon icon={faHtml5} />} label="Nod js" />
                            <SkillItem icon={<FontAwesomeIcon icon={faCss3} />} label="Express js" />
                            <SkillItem icon={<FontAwesomeIcon icon={faJs} />} label="RESTful API Creation" />
                            <SkillItem icon={<FontAwesomeIcon icon={faBootstrap} />} label="Auth & JWT " />

                        </SkillCard>

                        <SkillCard title="Database">
                            <SkillItem icon={<FontAwesomeIcon icon={faLeaf} />} label="MongoDB" />
                            <SkillItem icon={<FontAwesomeIcon icon={faCss3} />} label="MYSQL" />
                        </SkillCard>

                        <SkillCard title="Tools">
                            <SkillItem icon={<FontAwesomeIcon icon={faHtml5} />} label="Git & GitHub" />
                            <SkillItem icon={<FontAwesomeIcon icon={faCss3} />} label="Postman" />
                            <SkillItem icon={<FontAwesomeIcon icon={faJs} />} label="VS Code" />
                            <SkillItem icon={<FontAwesomeIcon icon={faBootstrap} />} label="npm" />

                        </SkillCard>

                    </div>
                    
            </section>

        </>
    )
}

const SkillCard = ({ title, children }) => (
  <div
    className="
      backdrop-blur-xl bg-white/5 border border-white/10
      rounded-2xl p-6 shadow-md 
      transition-all duration-500 
      hover:bg-white/10 
      hover:border-blue-400/40
      hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
      hover:scale-[1.01]
    "
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const SkillItem = ({ icon, label }) => (
  <div
    className="
      flex items-center gap-3 p-3 
      rounded-xl border border-white/10 
      bg-white/5 backdrop-blur-md 
      shadow-sm transition-all duration-300 
      hover:bg-white/10 
      hover:border-blue-400/40
      hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
      hover:scale-[1.01]
    "
  >
    <span className="text-2xl">{icon}</span>
    <p className="text-lg">{label}</p>
  </div>
);

export default Skills