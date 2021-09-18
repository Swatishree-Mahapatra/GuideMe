import "./courses.css"
import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Course = () => {
    return ( <>
      <section className="basic-grid">
     
      <div className="card card-tall card-wide"><h2 className="text text1">TELL US MORE ABOUT YOURSLEF</h2></div>
      <div className="card card-tall card-wide">
        <ul className="text">
          <li>JEE</li>
          <li>NEET</li>
          <li>KVPY</li>
          <li>NTSE</li>
          <li>UPSC</li>
        </ul>
      </div>
      
  </section>
  

  </>
      

     );
}
 
export default Course;