import React from 'react'
import unDataExtractor from "../assets/un-data-extraction.jpg"
import squirrelChallengeImg from "../assets/squirrel-data-extraction.jpg"
import { motion } from "framer-motion"
import "../styles/Projects.css"

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "unDataExtractor",
      img: unDataExtractor,
      link: "https://github.com/Domme19/UN_pdf_extraction"
    },


    {
      id: 2,
      name: "squirrel-script",
      img: squirrelChallengeImg,
      link: "https://github.com/Domme19/squirrel_script_v2"
    },
  ]

  const handleClick = (url) =>{
    window.open(url); 
  }

    
  
  return (
    <div className="projects">
      <div className="projects-heading">
        <h2>My work...</h2>
        <div className="bottom-line-section"></div>
      </div>

       <div className="projects-grid">
        {projectsData.map((item)=>(
          <motion.div whileHover={{scale:1.1}}
          key={item.id}
          onClick={() => handleClick(item.link)}>
             <img src={item.img} alt="#"/>
          </motion.div>
        ))}
      </div> 
    </div>
  )
}

export default Projects