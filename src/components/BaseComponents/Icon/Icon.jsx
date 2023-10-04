import './_Icon.scss';
import Icons from '../../../svg/sprite.svg';

function Icon({ name, className, modifier }) {
  const svgClassName = modifier
    ? `icon icon__${className} icon__${className}_${modifier}`
    : `icon icon__${className}`;

  return (
    <svg className={`${svgClassName} `}>
      <use xlinkHref={`${Icons}#${name}-icon`} />
    </svg>
  );
}

export default Icon;
