import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import './_AdminExperience.scss';

function AdminExperience({ experience }) {
  const reversedExperience = [...experience].reverse();

  return (
    <>
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
    </>
  );
}

export default AdminExperience;
