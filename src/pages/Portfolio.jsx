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
      title: 'Project 2',
      imageUrl: 'project2.jpg',
      deployedUrl: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects to the array as needed
  ];

  return (
    <div className="portfolio">
      <h1 className="pageTitle">My Projects</h1>
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