import { useState } from "react";
import "./App.css";

export function Header() {
  const [name, setName] = useState("Samuel Njuguna");
  function handleName(input) {
    setName(input.target.value);
  }
  const [email, setEmail] = useState("psammystprime384@gmail.com");
  function handleEmail(input) {
    setEmail(input.target.value);
  }
  const [telephone, setTelephone] = useState("+254 716041426");
  function handleTelephone(input) {
    setTelephone(input.target.value);
  }
  return (
    <>
      <h1>Project CV</h1>
      <h2>Contact</h2>
      <header>
        <section>
          <label htmlFor="name">Name: </label>
          <input onChange={handleName} type="text" id="name" />
          <label htmlFor="email">Email: </label>
          <input onChange={handleEmail} type="email" id="email" />
          <label htmlFor="telephone">Telephone: </label>
          <input onChange={handleTelephone} type="number" id="telephone" />
        </section>

        <span>
          <p>{name}</p>
          <p>{email}</p>
          <p>{telephone}</p>
        </span>
      </header>
    </>
  );
}

export function Education() {
  const [school, setSchool] = useState("Thika Technical");
  function handleSchool(input) {
    setSchool(input.target.value);
  }
  const [startDate, setStartDate] = useState("May 2021");
  function handleStartDate(input) {
    setStartDate(input.target.value);
  }
  const [finishDate, setFinishDate] = useState("Dec 2025");
  function handleFinishDate(input) {
    setFinishDate(input.target.value);
  }
  const [course, setCourse] = useState(
    "Electrical and Electronics Engineering"
  );
  function handleCourse(input) {
    setCourse(input.target.value);
  }
  return (
    <div className="education">
      <h2>Education</h2>
      <div>
        <section>
          <label htmlFor="school">School: </label>
          <input onChange={handleSchool} type="text" id="school" />

          <label htmlFor="startDate">Start Date: </label>
          <input onChange={handleStartDate} type="Date" id="startDate" />

          <label htmlFor="finishDate">Finish Date: </label>
          <input onChange={handleFinishDate} type="Date" id="finishDate" />

          <label htmlFor="course">Field of Study: </label>
          <input onChange={handleCourse} type="text" id="course" />
        </section>

        <span>
          <h5>{school}</h5>
          <p>
            {startDate} - {finishDate}
          </p>
          <p>{course}</p>
        </span>
      </div>
    </div>
  );
}

export function Experience() {
  const [company, setCompany] = useState("Kenya Power");
  function handleCompany(input) {
    setCompany(input.target.value);
  }
  const [startDate, setStartDate] = useState("Jan 2023");
  function handleStartDate(input) {
    setStartDate(input.target.value);
  }
  const [finishDate, setFinishDate] = useState("Dec 2023");
  function handleFinishDate(input) {
    setFinishDate(input.target.value);
  }
  const [position, setPosition] = useState("Senior Technician");
  function handlePosition(input) {
    setPosition(input.target.value);
  }
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div>
        <section>
          <label htmlFor="company">Company: </label>
          <input onChange={handleCompany} type="text" id="company" />

          <label htmlFor="startDate">Start Date: </label>
          <input onChange={handleStartDate} type="Date" id="startDate" />

          <label htmlFor="finishDate">Finish Date: </label>
          <input onChange={handleFinishDate} type="Date" id="finishDate" />

          <label htmlFor="position">Position: </label>
          <input onChange={handlePosition} type="text" id="position" />
        </section>

        <span>
          <h5>{company}</h5>
          <p>
            {startDate} - {finishDate}
          </p>
          <p>{position}</p>
        </span>
      </div>
    </div>
  );
}
export function Skills() {
  const items = ["motors", "rotors"];
  const [skills, setSkills] = useState(items);

  function handleSkills(input) {
    // arr.push(input.target.nextSibling.value);

    let items2 = ["hey", "there", "goat"];
    setSkills(items2);
  }
  return (
    <>
      <h2>Technical Skills</h2>
      <button onClick={handleSkills}>click</button>
      <input type="text" />

      <ul>
        {skills.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}
export default function App() {
  return (
    <>
      <Header />;
      <Education />
      <Experience />
      <Skills />
    </>
  );
}
