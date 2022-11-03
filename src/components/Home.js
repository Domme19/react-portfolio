import React from 'react'
import picture from "../assets/background-img.jpg"
import { DiDjango } from "react-icons/di"
import { RiComputerLine } from "react-icons/ri"
import { AiFillDatabase } from "react-icons/ai"
import "../styles/Home.css"
import { motion } from "framer-motion"


const Home = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <motion.div 
          animate={{x:100}}
          transition={{ease: "easeOut", duration: 1}}
          >
          <div className="text-section">
            <h1>Hi, I am Dieuveille</h1>
            <h1>An aspiring python software developer!</h1>
            <p>I am keen on learning anything that would make
              a better employee to any organization.
            </p>
          </div>
        </motion.div>

        <motion.div 
          animate={{x: -50}}
          transition={{ease: "easeOut", duration: 1}}
          >
          <div className="picture-section">
            <img src={picture} alt="#" className="home-picture"/>
          </div>
        </motion.div>
      </div>
      
      <div className="home-specialization">
        <h2>I specialize in</h2>
        <div className="bottom-line"></div>
          <p>Learning in depth how various technologies work.</p>
      </div>

      <div className="home-specialization-grid">
      <motion.button whileHover={{ scale: 1.1}}>
        <div>
          <DiDjango size={40} />
          <h3>Python</h3>
          <p>Learning python django framework at the moment,
            to understand how better to deal with data that power the
            frontend.
          </p>
        </div>
      </motion.button> 

        <motion.button whileHover={{ scale: 1.1}}>
          <div>
            <AiFillDatabase size={40} />
            <h3>Algorithms and data structures</h3>
            <p>Learning different algorithms and their time complexity
              which could serve as a deciding factor how fast your application
              can be.
            </p>
          </div>
        </motion.button> 
      
      <motion.button whileHover={{ scale: 1.1}}>
        <div>
          <RiComputerLine size={40} />
          <h3>Computer science fundamentals</h3>
          <p>Learning from Nand12tetris how different computer components work.
            This takes me to understand how efficient the computer can be used at its
            maximum to accomplish trivial tasks.
          </p>
        </div>
      </motion.button> 
      </div>
    </div>
  )
}

export default Home