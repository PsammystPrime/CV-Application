import { useState } from "react";
import './App.css'
export default function App(){
  
  return(
  <>
  <div className="header">A CV Application</div>

  <div className="body">
    <div className="left">

      <div className="contact">
        <h2>Contacts</h2>
        <span>Name:</span>
        <span>Email:</span>
        <span>Phone:</span>  
      </div>
      <div className="education">
        <h2>Education</h2>
        <span>School:</span>
        <span>Course:</span>
        <span>Date:</span>
      </div>
      <div className="objectives">
        <h2>Objectives</h2>
        <p>An Innovative and creative techie aspiring to explore the realms of Software Development and Technical Writing</p>
      </div>
    </div>
    
    <div className="right">
      <div className="skills">
        <h2>Skills</h2>
        <div className="hardSkills">
          <h4>Technical Skills</h4>
          <ul>
          <li>HTML5</li>
          <li>Vanilla CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Test Driven Development</li>
        </ul>
        </div>
        <div className="softSkills">
          <h4>Soft Skills</h4>
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
        <h2>Experience</h2>
        <div className="frontend">
          <h4>Front-End</h4>
          <p>Creating pixel perfect design websites that meet the user's satisfaction and experience. Experienced in working with API's, Es6 Modules, Web Accessibility, Frontend web-Security just to mention but a few.</p>
        </div>
        <div className="writing">
          <h4>Technical Writing</h4>
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