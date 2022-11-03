import React from 'react'
import {GrMail, GrPhone, GrLocation} from  "react-icons/gr"
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h2>CONTACT ME...</h2>
        <div className="bottom-line"></div>
      </div>
      <div className="contact-grid">
        <div>
          <GrLocation size={40}/>
          <h3>Location</h3>
          <p>21 Twilley street Trengrove, Kenilworth</p>
        </div>


        <div>
          <GrMail size={40}/>
          <h3>Email</h3>
          <p>mabdieuveille@gmail.com</p>
        </div>


        <div>
          <GrPhone size={40}/>
          <h3>Phone</h3>
          <p>+27-65-907-2933</p>
        </div>
      </div>
    </div>
  )
}

export default Contact