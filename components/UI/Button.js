import Link from 'next/link';

import classes from './Button.module.scss';

const Button = (props) => {
  return <Link href={props.href} className={`btn`}>{props.children}</Link>
}

export default Button;