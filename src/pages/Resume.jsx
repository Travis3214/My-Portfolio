  const Resume = () => {
    const resumePDF = 'resume.pdf';

    return (
        <div>
          <iframe
            title="Resume"
            src={resumePDF}
            width="100%"
            height="1000"
          ></iframe>
        </div>
    );
  };

export default Resume;