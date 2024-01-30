export default function About() {
    return (
      <div className="title aboutMe">
        <div className="bootcamp">
          <div className="bootcampText">
            <h1 className="aboutText">Coding Bootcamp</h1>
            <p>
              I acquired my coding skills through the University of Central Florida's Coding Bootcamp. The program centered on comprehensive instruction in Javascript, encompassing various frameworks and libraries that are prevalent in recent development practices. Over the course, I undertook numerous front-end and back-end projects, showcasing my ability to handle diverse aspects of development. Additionally, I collaborated within group settings to build and deploy full-stack projects. These experiences have honed my proficiency in both individual and collaborative coding environments.
            </p>
          </div>
          <img className="me1" src="/code.jpg" alt="a picture of a computer with coding on screen" />
        </div>
        <div className="stayActive">
          <img className="me2" src="/paolo.jpeg" alt="a photo of an orlando magic basketball player" />
          <div className="stayActiveText">
            <h1 className="aboutText">Stay Active</h1>
            <p>
              Outside of my professional pursuits in coding, I prioritize a well-rounded work-life balance. I invest my time in quality moments with family, engage in strength training for personal well-being, and actively participate in basketball, not only as a form of recreation but also as a commitment to maintaining a healthy lifestyle. These pursuits reflect my disciplined approach to both personal and professional aspects of life.
            </p>
          </div>
        </div>
      </div>
    );
  };