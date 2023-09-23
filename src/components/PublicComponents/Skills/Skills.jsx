import './_Skills.scss';
import SkillsList from '../SkillsList/SkillsList.jsx';

function Skills({ skills, title }) {
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
      <SkillsList
        skills={skills}
        subtitle="Языки"
        type="language"
      />
      <SkillsList
        skills={skills}
        subtitle="Препроцессоры и Шаблонизаторы"
        type="preprocessor"
      />
      <SkillsList
        skills={skills}
        subtitle="Библиотеки и Фреймворки"
        type="library"
      />
      <SkillsList
        skills={skills}
        subtitle="Системы управления содержимым"
        type="cms"
      />
      <SkillsList
        skills={skills}
        subtitle="Инструменты"
        type="tool"
      />
    </>
  );
}

export default Skills;
