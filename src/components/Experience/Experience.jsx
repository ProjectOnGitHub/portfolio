import experience from '../../utils/experience';
import './_Experience.scss';

function Experience(props) {
  return (
    <>
      <h2 className="experience__title">{props.title}</h2>
      <ul className="experience__list">
        {[...experience].reverse().map((item) => (
          <li
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
          </li>
        ))}
      </ul>
    </>
  );
}

export default Experience;
