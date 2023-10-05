import ProjectCard from "../components/Projects";

function Portfolio() {
  const projects = [
    {
      title: 'Password Generator',
      imageUrl: 'passwordGenerator.png',
      deployedUrl: 'https://travis3214.github.io/Password-Generator/',
      githubLink: 'https://github.com/Travis3214/Password-Generator',
    },
    {
      title: 'Timed Quiz',
      imageUrl: 'timedQuiz.png',
      deployedUrl: 'https://travis3214.github.io/Timed-Quiz/',
      githubLink: 'https://github.com/Travis3214/Timed-Quiz',
    },
    {
      title: 'Workday Scheduler',
      imageUrl: 'workDay.png',
      deployedUrl: 'https://travis3214.github.io/Workday-Scheduler/',
      githubLink: 'https://github.com/Travis3214/Workday-Scheduler',
    },
    {
      title: 'SVG Logo Creator',
      imageUrl: '',
      deployedUrl: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects to the array as needed
  ];

  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="projectLayout">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedUrl={project.deployedUrl}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;