import './_Projects.scss';
import Project from '../Project/Project';
import List from '../../BaseComponents/List/List';
import ListItem from '../../BaseComponents/ListItem/ListItem';

function Projects({ projects, title }) {
  return (
    <>
      <h2 className="projects__title">{title}</h2>
      <List className="projects__list">
        {projects.map((item) => (
          <ListItem
            key={item.id}
            className="project">
            <Project
              description={item.description}
              githubUrl={item.githubUrl}
              image={item.image}
              stack={item.stack}
              title={item.title}
              url={item.url}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Projects;
