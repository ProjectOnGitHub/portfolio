import './_Skills.scss';
import SkillsList from '../SkillsList/SkillsList.jsx';
import Skill from '../Skill/Skill.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';

function Skills({ title, skillsByType }) {
  return (
    <>
      <h2 className="skills__title">{title}</h2>
      <div className="skills__text">
        <p className="skills__paragraph">
          Могу кроссплатформенно, кроссбраузерно и адаптивно сверстать проекты
          различной сложности, в том числе и с помощью Flexbox, Grid. При
          вёрстке использую методологию БЭМ. В качестве препроцессоров пользуюсь
          Sass (синтаксис SCSS) и Stylus, но предпочитаю первый. Есть опыт
          натяжки вёрстки и доработки тем для WordPress. Для сборки использую
          Webpack.
        </p>
        <p className="skills__paragraph">
          Базово знаю JavaScript: типы данных и методы работы с ними. Могу
          работать с DOM: создание, добавление, удаление элементов, отслеживание
          событий и реагирование на них. Аналогично и с jQuery.
        </p>
        <p className="skills__paragraph">
          Есть опыт работы с React: хуки useState, useEffect, React Router,
          React Context. Предпочтение отдаю функциональным компонентам. Также
          есть опыт работы как с Vue.js, так и с Nuxt.js.
        </p>
      </div>

      {Object.values(skillsByType).map((group) => (
        <SkillsList
          key={group.type}
          title={group.sectionTitle}>
          {group.skills.map((item) => (
            <ListItem
              key={item.id}
              className="skill">
              <Skill
                className="skill"
                name={item.name}
                title={item.title}
                type={item.type}
              />
            </ListItem>
          ))}
        </SkillsList>
      ))}
    </>
  );
}

export default Skills;
