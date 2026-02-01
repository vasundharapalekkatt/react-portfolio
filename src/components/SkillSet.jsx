import React from "react";
import "./SkillsCard.css";

function SkillSet() {
  return (
    <section id="skills" className="py-16 px-6 md:px-16 bg-black text-white" >
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="skills-container">
              
        {/* Frontend Card */}
        <div className="skill-card">
          <h1>Front-End</h1>
          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>Tailwind</span>
            <span>React.js</span>
            <span>Angular</span>
            <span>TypeScript</span>
          </div>
        </div>
  
        {/* Backend Card */}
        <div className="skill-card">
         
          <h1>Back-End</h1>
          <div className="tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>RESTful API Creation</span>
            <span>Auth & JWT</span>
          </div>
        </div>
  
        {/* Database Card */}
        <div className="skill-card">
         
          <h1>Database</h1>
          <div className="tags">
            <span>MongoDB</span>
            <span>MySQL</span>
            
          </div>
        </div>
  
        {/* Tools Card */}
        <div className="skill-card">
          <h1>Tools</h1>
          <div className="tags">
            <span>Git & GitHub</span>
            <span>Postman</span>
            <span>VS Code</span>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSet;