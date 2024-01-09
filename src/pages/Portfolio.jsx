import ProjectCard from "../components/Projects";

function Portfolio() {
  const projects = [
    {
      title: 'Remote Pathfinder',
      imageUrl: 'remote.png',
      deployedUrl: 'https://remotepathfinder-674af8cc1693.herokuapp.com/',
      githubLink: 'https://github.com/KingKonaTheFirst/Remote-Pathfinder',
    },
    {
      title: 'Tone Zone',
      imageUrl: 'tonezone.png',
      deployedUrl: 'https://kingkonathefirst.github.io/ToneZone/',
      githubLink: 'https://github.com/KingKonaTheFirst/ToneZone',
    },
    {
      title: 'SVG Logo Creator',
      imageUrl: 'logo.png',
      deployedUrl: 'https://example.com/logo-creator',
      githubLink: 'https://github.com/Travis3214/Logo-Creator',
    },
    {
      title: 'BulbaSort',
      imageUrl: 'bulbasort.png',
      deployedUrl: 'https://tragichandlebarsad-d72c9907ede6.herokuapp.com/',
      githubLink: 'https://github.com/rdheadyii/Bulbasort',
    },
    {
      title: 'E-Commerce',
      imageUrl: 'ecommerce.png',
      deployedUrl: 'https://drive.google.com/file/d/193klQrJsytgMELcxM_Ljbg2Qr44AHli6/view',
      githubLink: 'https://github.com/Travis3214/E-commerce',
    },
    {
      title: 'Social Network API',
      imageUrl: 'social.png',
      deployedUrl: 'https://github.com/Travis3214/Social-Network-API',
      githubLink: 'https://github.com/Travis3214/Social-Network-API',
    },
    {
      title: 'Note Taker',
      imageUrl: 'notes.png',
      deployedUrl: 'https://travis-6df536f74095.herokuapp.com/',
      githubLink: 'https://github.com/Travis3214/Note-Taker',
    },
    {
      title: 'Text Editor PWA',
      imageUrl: 'text.png',
      deployedUrl: 'https://travis2-6930baed8799.herokuapp.com/',
      githubLink: 'https://github.com/Travis3214/Text-Editor-PWA',
    },
    {
      title: 'Tech Blog',
      imageUrl: 'blog.png',
      deployedUrl: 'https://github.com/Travis3214/Tech-Blog',
      githubLink: 'https://github.com/Travis3214/Tech-Blog',
    },
    
    {
      title: 'Read-Me Generator',
      imageUrl: 'readme.png',
      deployedUrl: 'https://drive.google.com/file/d/1X0_6Y1cEawJfouh6XA-qquzwjUsyD_lV/view',
      githubLink: 'https://github.com/Travis3214/Generate-ReadMe',
    },
    
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