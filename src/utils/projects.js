import club27 from '../images/club27.jpg';
import shelter from '../images/shelter.jpg';
import company from '../images/company.jpg';
import portfolioAlexa from '../images/portfolio-alexa.jpg';
import kinoprorok from '../images/kinoprorok.jpg';

const projects = [
  {
    id: 1,
    title: 'Сайт на тему клуба 27',
    description:
      'Проект на интересную для меня тему. Собственный дизайн. Вёрстка адаптирована под мобильные разрешения.',
    stack: 'React, HTML, SCSS',
    url: 'https://27club.wbdv.ru',
    githubUrl: 'https://github.com/ProjectOnGitHub/27club',
    image: club27,
  },
  {
    id: 2,
    title: 'Лэндинг компании',
    description: 'Лэндинг для компании по макету из Figma. Свёрстан под различные разрешения.',
    stack: 'HTML, CSS, JavaScript, Webpack',
    url: 'https://company.wbdv.ru',
    githubUrl: 'https://github.com/ProjectOnGitHub/company',
    image: company,
  },
  {
    id: 3,
    title: 'Лэндинг-портфолио для фотографа',
    description:
      'Портфолио по макету из Figma. С помощью JS реализована возможность менять тему со светлой на тёмную, переключать язык, фильтровать фото по временам года. Вёрстка адаптирована под мобильные разрешения.',
    stack: 'HTML, SCSS, JavaScript',
    url: 'https://portfolio-alexa.wbdv.ru',
    githubUrl: 'https://github.com/ProjectOnGitHub/portfolio-alexa',
    image: portfolioAlexa,
  },
  {
    id: 4,
    title: 'Сайт приюта для животных',
    description:
      'Адаптивно свёрстан по макету из Figma. С помощью JS реализована пагинация списка животных и попап, который открывается при клике по фотографии животного.',
    stack: 'HTML, SCSS, JavaScript',
    url: 'https://shelter.wbdv.ru/pages/main/',
    githubUrl: 'https://github.com/ProjectOnGitHub/shelter',
    image: shelter,
  },
  {
    id: 5,
    title: 'Блог Кино про рок',
    description:
      'Собственный дизайн. Свёрстан адаптивно. Натяжка вёрстки на Wordpress с последующей доработкой функционала темы',
    stack: 'HTML, SCSS, Webpack, JavaScript, PHP',
    url: 'https://kinoprorok.ru',
    githubUrl: '',
    image: kinoprorok,
  },
];

export default projects;
