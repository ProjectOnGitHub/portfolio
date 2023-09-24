import './_Experience.scss';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';

function Experience({ title, experience }) {
  const reversedExperience = [...experience].reverse();

  return (
    <>
      <h2 className="experience__title">{title}</h2>
      <ul className="experience__list">
        {[...reversedExperience].map((item) => (
          <ListItem
            key={item.id}
            className="experience__list-item">
            <h3 className="experience__subtitle">{item.title}</h3>
            <span className="experience__name">{item.name}</span>
            <div className="experience__date">
              <span className="experience__date-start">{item.start}</span>
              {` — `}
              <span className="experience__date-end">{item.end}</span>
            </div>
            <div className="experience__text">
              {item.text.map((paragraph, i) => (
                <p
                  key={i}
                  className="experience__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default Experience;
