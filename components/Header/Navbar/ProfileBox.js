import Link from "next/link";

import classes from './ProfileBox.module.css';

const ProfileBox = () => {

  return (
    <div className={classes.profileBox}>
      <span id="dropdown-1btn" className={'material-icons'+ ' ' +classes['material-icons-1']+ ' ' +'dropbtn'}>
        menu
      </span>
      <span id="dropdown-1btn" className={'material-icons'+ ' ' +classes['material-icons-2']+ ' ' +'dropbtn'}>
        account_circle
      </span>
      <div id="dropdown-content-1" className={'dropdown__content'+ ' ' +classes['dropdown-content-1']}>
        <Link href="#">Sign up</Link>
        <Link href="#">Log in</Link>
        <hr />
        <Link href="#">Help</Link>
      </div>
    </div>
  );
}

export default ProfileBox;