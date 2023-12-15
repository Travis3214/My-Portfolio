// export default function Resume() {

  const Resume = () => {
    const resumePDF = 'resume.pdf'; // Replace this with the path to your resume PDF

    return (
      <div>
        <div>
          <iframe
            title="Resume"
            src={resumePDF}
            width="100%"
            height="1000px"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    );
  };

export default Resume;