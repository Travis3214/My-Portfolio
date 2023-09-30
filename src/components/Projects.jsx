import { DiGithubFull } from "react-icons/di";

function ProjectCard({ title, imageUrl, githubLink, deployedUrl }) {
    return (
      <div className="projectCard">
        <a href={deployedUrl} target="_blank">
          <img className="projectPhoto" src={imageUrl} alt={title} />
        </a>
        <h3>{title}</h3>
        <a href={githubLink} target="_blank">
            <DiGithubFull className="primary githubIcon"/></a>
      </div>
    );
  }
  
  export default ProjectCard;