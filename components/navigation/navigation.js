import Link from "next/link";

import styles from "./navigation.module.scss";

const Navigation = ({ firstNavigationLink, secondNavigationLink, thirdNavigationLink }) => {

  return (
    <div id="navigation" className={`${styles.navigation} smaller-text`}>
      <p className="smaller-text-bold">
        {thirdNavigationLink?.title
          ? thirdNavigationLink?.title
          : secondNavigationLink?.title
          ? secondNavigationLink?.title
          : firstNavigationLink.title}
      </p>
      <div>
        <Link href={"/"}>Home</Link>
        <span>{"/"}</span>
        {firstNavigationLink && (
          <Link href={firstNavigationLink.link}>
            {firstNavigationLink.title}
          </Link>
        )}
        {secondNavigationLink && (
          <>
            <span>{"/"}</span>
            <Link href={secondNavigationLink.link}>
              {secondNavigationLink.title}
            </Link>
          </>
        )}
        {thirdNavigationLink && (
          <>
            <span>{"/"}</span>
            <Link href={thirdNavigationLink.link}>
              {thirdNavigationLink.title}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
