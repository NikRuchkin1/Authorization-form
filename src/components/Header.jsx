import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#fff',
    width: 24,
    height: 29.25,
  },
}));

function Header() {
  const style = useStyles()
  return (
    <div className="container">
      <div className="user_header">
        <NotificationsNoneIcon fontSize='medium' className={style.icon}/>
        <span className='line_dividing'/>
      </div>
    </div>
  );
}

export default Header;
