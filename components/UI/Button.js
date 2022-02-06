import style from './Button.module.scss';

const Button = (props) => {

  let classes = `${style.btn} ${style[props.des]}`

  if (props.des === 'btn-1') {
    classes = `${style["btn-1"]}`;
  }

  return <a className={classes}>{props.children}</a>;
}

export default Button;