import Project from 'components/PublicComponents/Project/Project';
import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';
import Section from 'components/PublicComponents/Section/Section';

import './_Projects.scss';

function Projects({ projects }) {
  return (
    <Section
      className="projects"
      id="projects">
      <h2 className="projects__title">Проекты</h2>
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
    </Section>
  );
}

export default Projects;
