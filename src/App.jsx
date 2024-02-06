import { useState } from "react";
import './App.css'
export default function App(){
  
  return(
  <>
  <div className="header">A CV Application</div>

  <div className="body">
    <div className="left">

      <div className="contact">
        <span>Name:</span>
        <span>Email:</span>
        <span>Phone:</span>  
      </div>
      <div className="education">
        <span>School:</span>
        <span>Course:</span>
        <span>Date:</span>
      </div>
      <div className="objectives">
        <p>An Innovative and creative techie aspiring to explore the realms of Software Development and Technical Writing</p>
      </div>
    </div>
    
    <div className="right">
      <div className="skills">
        <div className="hardSkills">
          <ul>
          <li>HTML5</li>
          <li>Vanilla CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Test Driven Development</li>
        </ul>
        </div>
        <div className="softSkills">
          <ul>
            <li>Problem Solving</li>
            <li>Team Work</li>
            <li>Innovative</li>
            <li>Team Lead</li>
            <li>Self-driven</li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <div className="frontend">
          <h3>Front-End</h3>
          <p>Creating pixel perfect design websites that meet the user's satisfaction and experience. Experienced in working with API's, Es6 Modules, Web Accessibility, Frontend web-Security just to mention but a few.</p>
        </div>
        <div className="writing">
          <h3>Technical Writing</h3>
          <p>Curating Technical Content in the simplest way possible to bring levelty where novice meets professional</p>
        </div>
      </div>
      <button className="edit">Edit CV</button>
    </div>
  </div>
  
  <footer>Made with love by <a href="github.com/Psammystprime">Psammyst Prime</a></footer>
  </>
  )
}