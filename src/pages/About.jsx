export default function About() {
    return (
      <div className="title aboutMe">
        <div className="bootcamp">
          <div className="bootcampText">
            <h1 className="aboutText">Coding Bootcamp</h1>
            <p>
              I learned to code by going to the University of Central Florida's Coding Bootcamp. The course focused on Javascript and many of the framworks and libriaries that are widely used today. Throughout the course I worked individually on many front-end and back-end projects. I also got to work in groups on full-stack projects that we showed off to the class.
            </p>
          </div>
          <img className="me1" src="/code.jpg" alt="a picture of a computer with coding on screen" />
        </div>
        <div className="stayActive">
          <img className="me2" src="/paolo.jpeg" alt="a photo of an orlando magic basketball player" />
          <div className="stayActiveText">
            <h1 className="aboutText">Stay Active</h1>
            <p>
              I'm a die hard Orlando Magic fan that loves supporting my home team! When I'm not coding im usually hanging out with family, lifting weights, or playing basketball to maintain a healthy work life balance.
            </p>
          </div>
        </div>
      </div>
    );
  };