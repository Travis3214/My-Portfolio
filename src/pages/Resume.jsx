  const Resume = () => {
    const resumePDF = 'resume.pdf';

    return (
        <div>
          <iframe
            title="Resume"
            src={resumePDF}
            width="100%"
            height="1000px"
            style={{ border: 'none' }}
          ></iframe>
        </div>
    );
  };

export default Resume;